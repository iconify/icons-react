import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc8kfn0zy.css';
import '../../css/a/acwejz0_o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc8kfn0zy"/><path class="acwejz0_o"/>`,
		"fallback": "openmoji:hand-with-fingers-splayed-dark-skin-tone",
	});
}

export default Component;
