import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqu8yfb1o.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqu8yfb1o"/>`,
		"fallback": "f7:flag-circle",
	});
}

export default Component;
