import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rfgqaxbee.css';
import '../../css/s/svxtvccuv.css';
import '../../css/k/k_pt_skzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rfgqaxbee"/><path class="svxtvccuv"/><path class="k_pt_skzo"/></g>`,
		"fallback": "streamline-freehand-color:connect-device-cancel",
	});
}

export default Component;
