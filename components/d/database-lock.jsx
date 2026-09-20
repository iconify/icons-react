import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dkctlvbtg.css';
import '../../css/y/y3uowlb4h.css';
import '../../css/p/pihi_qbza.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dkctlvbtg"/><path class="y3uowlb4h"/><path class="pihi_qbza"/></g>`,
		"fallback": "streamline:database-lock",
	});
}

export default Component;
