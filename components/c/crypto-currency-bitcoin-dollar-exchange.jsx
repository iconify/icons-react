import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hg67b62xt.css';
import '../../css/x/xfsw9pbyl.css';
import '../../css/p/ptf5ambcf.css';
import '../../css/z/zo-3wjb1q.css';
import '../../css/v/vzd76bcrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hg67b62xt"/><path class="xfsw9pbyl"/><path class="ptf5ambcf"/><path class="zo-3wjb1q"/><path class="vzd76bcrv"/></g>`,
		"fallback": "streamline-ultimate:crypto-currency-bitcoin-dollar-exchange",
	});
}

export default Component;
