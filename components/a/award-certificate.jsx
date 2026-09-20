import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbssc1pdt.css';
import '../../css/v/vl4m-ybhi.css';
import '../../css/e/ekom2-fqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cbssc1pdt"/><path class="vl4m-ybhi"/><path class="ekom2-fqx"/></g>`,
		"fallback": "reicon:award-certificate",
	});
}

export default Component;
