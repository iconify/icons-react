import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rirux2j4y.css';
import '../../css/a/acwmw9bjn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rirux2j4y"/><path class="acwmw9bjn"/>`,
		"fallback": "carbon:cut-out",
	});
}

export default Component;
