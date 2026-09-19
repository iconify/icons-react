import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryx50ab7s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryx50ab7s"/>`,
		"fallback": "fa7-regular:grin-beam",
	});
}

export default Component;
