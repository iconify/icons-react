import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo4xr7bel.css';
import '../../css/q/q4497hb1w.css';
import '../../css/s/s11q8obkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo4xr7bel"/><path class="q4497hb1w"/><path class="s11q8obkf"/>`,
		"fallback": "bx:bxl-audible",
	});
}

export default Component;
