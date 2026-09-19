import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2vpa7-wx.css';
import '../../css/a/aytccm9qb.css';
import '../../css/l/lqxjulbjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2vpa7-wx"/><path class="aytccm9qb"/><path class="lqxjulbjv"/>`,
		"fallback": "famicons:camera-reverse-outline",
	});
}

export default Component;
