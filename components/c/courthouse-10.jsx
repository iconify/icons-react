import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fod000b9w.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fod000b9w"/>`,
		"fallback": "osmic:courthouse-10",
	});
}

export default Component;
