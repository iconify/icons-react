import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx_qx2rdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx_qx2rdm"/>`,
		"fallback": "cbi:3dprinter-standby",
	});
}

export default Component;
