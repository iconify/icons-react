import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m_37_ob0k.css';
import '../../css/q/qt83qvb_u.css';
import '../../css/c/ccochw3vc.css';
import '../../css/o/osa342_sq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m_37_ob0k"/><path class="qt83qvb_u"/><circle class="ccochw3vc"/><rect class="osa342_sq"/></g>`,
		"fallback": "lets-icons:camera-duotone",
	});
}

export default Component;
