import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n65k4obuz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eosf8ub_j.css';
import '../../css/l/lhivpe_dj.css';
import '../../css/p/p-mz6wbtp.css';
import '../../css/d/d49nub01a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n65k4obuz secondary"/><g class="dt0cm9dhy primary"><path class="eosf8ub_j"/><path class="lhivpe_dj"/><path class="p-mz6wbtp"/><path class="d49nub01a"/></g>`,
		"fallback": "iconaut:drafting-compass-duo",
	});
}

export default Component;
