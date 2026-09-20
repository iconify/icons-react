import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zbwg-d8nv.css';
import '../../css/o/oa-898b0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zbwg-d8nv"/><path class="oa-898b0g"/></g>`,
		"fallback": "streamline-ultimate:crypto-currency-bitcoin-laptop",
	});
}

export default Component;
