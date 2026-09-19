import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvbkgeawu.css';
import '../../css/y/y87l3m6qq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvbkgeawu"/><path class="y87l3m6qq"/>`,
		"fallback": "devicon:ansys-wordmark",
	});
}

export default Component;
