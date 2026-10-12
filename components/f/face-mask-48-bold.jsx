import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr0py_b6k.css';
import '../../css/x/xuyp_ezqr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr0py_b6k"/><path class="xuyp_ezqr"/>`,
		"fallback": "energy-icons:face-mask-48-bold",
	});
}

export default Component;
