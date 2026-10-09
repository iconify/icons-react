import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxp0_ibgn.css';
import '../../css/u/uern_gkkh.css';
import '../../css/y/y1x058bnk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxp0_ibgn"/><path class="uern_gkkh"/><path class="y1x058bnk"/>`,
		"fallback": "energy-icons:arrow-left-square-20",
	});
}

export default Component;
