import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aygs-2bgn.css';
import '../../css/f/ffq40l0fx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aygs-2bgn"/><path class="ffq40l0fx"/></g>`,
		"fallback": "andrsrxn:decimals",
	});
}

export default Component;
