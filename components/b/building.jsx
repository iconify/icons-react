import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wmc_e8brh.css';
import '../../css/z/zxz-okbrh.css';
import '../../css/y/yl_4ogbpd.css';
import '../../css/m/mexfcmb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="wmc_e8brh"/><path class="zxz-okbrh"/><path class="yl_4ogbpd"/><path class="mexfcmb1m"/></g>`,
		"fallback": "matita:building",
	});
}

export default Component;
