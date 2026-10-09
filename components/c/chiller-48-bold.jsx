import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu9rvubvf.css';
import '../../css/y/ycyy2zfvg.css';
import '../../css/w/wsl5l-gpv.css';
import '../../css/u/uiazosb3r.css';
import '../../css/b/bq7vetxjn.css';
import '../../css/j/jhysqbbxu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu9rvubvf"/><path class="ycyy2zfvg"/><path class="wsl5l-gpv"/><path class="uiazosb3r"/><path class="bq7vetxjn"/><path class="jhysqbbxu"/>`,
		"fallback": "energy-icons:chiller-48-bold",
	});
}

export default Component;
