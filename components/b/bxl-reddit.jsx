import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyprt8xil.css';
import '../../css/c/czi-3ob_q.css';
import '../../css/u/u_tnrpbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jyprt8xil"/><path class="czi-3ob_q"/><path class="u_tnrpbpj"/>`,
		"fallback": "bx:bxl-reddit",
	});
}

export default Component;
