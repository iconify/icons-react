import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y_jacfocb.css';
import '../../css/y/y2i2crbcm.css';
import '../../css/o/ocoockb2g.css';
import '../../css/a/ax14dsbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="y_jacfocb"/><path class="wm-shadow y2i2crbcm"/><path class="ocoockb2g"/><path class="ax14dsbgb"/></g>`,
		"fallback": "withicons:candy-engrave",
	});
}

export default Component;
