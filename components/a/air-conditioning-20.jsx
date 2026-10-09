import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxqh80bxh.css';
import '../../css/n/nxwt419zs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxqh80bxh"/><path class="nxwt419zs"/>`,
		"fallback": "energy-icons:air-conditioning-20",
	});
}

export default Component;
