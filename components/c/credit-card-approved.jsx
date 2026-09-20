import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gj620ccpc.css';
import '../../css/f/f6x_bdc8j.css';
import '../../css/h/hp18qze2g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gj620ccpc"/><path class="f6x_bdc8j"/><path class="hp18qze2g"/></g>`,
		"fallback": "streamline-flex-color:credit-card-approved",
	});
}

export default Component;
