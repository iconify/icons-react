import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lnc4jbg4z.css';
import '../../css/o/ofwm1kdcx.css';
import '../../css/e/en291ygfx.css';
import '../../css/m/m_b26hb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lnc4jbg4z wm-k"/><path class="ofwm1kdcx wm-a"/><path class="en291ygfx wm-k"/><path class="m_b26hb0h wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-curly-sketch",
	});
}

export default Component;
