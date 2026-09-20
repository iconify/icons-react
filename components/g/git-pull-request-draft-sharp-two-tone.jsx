import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tvudebc2k.css';
import '../../css/d/dx5sw3bdp.css';
import '../../css/p/pn5m_ac8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="tvudebc2k"/><path class="dx5sw3bdp"/><path class="pn5m_ac8z"/></g>`,
		"fallback": "keyline-icons:git-pull-request-draft-sharp-two-tone",
	});
}

export default Component;
