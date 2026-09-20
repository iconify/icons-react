import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c04itccgg.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c04itccgg"/>`,
		"fallback": "osmic:entrance-10",
	});
}

export default Component;
