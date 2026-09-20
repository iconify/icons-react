import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbpad4b7b.css';
import '../../css/m/mgyq-dbbb.css';
import '../../css/x/x_rkz67op.css';
import '../../css/a/ar386rvvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xbpad4b7b"/><path class="mgyq-dbbb"/><path class="x_rkz67op"/><path class="ar386rvvj"/></g>`,
		"fallback": "streamline-ultimate-color:bicycle",
	});
}

export default Component;
