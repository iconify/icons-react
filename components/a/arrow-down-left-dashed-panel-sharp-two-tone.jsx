import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fkgek20zv.css';
import '../../css/p/pcfme6qxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fkgek20zv"/><path class="pcfme6qxp"/></g>`,
		"fallback": "keyline-icons:arrow-down-left-dashed-panel-sharp-two-tone",
	});
}

export default Component;
