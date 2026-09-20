import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gp8kdlfrl.css';
import '../../css/v/ve7ymobeq.css';
import '../../css/x/xb_uqnobv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gp8kdlfrl"/><path class="ve7ymobeq"/><path class="xb_uqnobv"/></g>`,
		"fallback": "streamline-color:dollar-coin-1",
	});
}

export default Component;
