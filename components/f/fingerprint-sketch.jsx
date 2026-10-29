import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j3dcsdbvr.css';
import '../../css/o/okzts2beh.css';
import '../../css/t/tkbhou2iz.css';
import '../../css/d/dn06k0bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j3dcsdbvr wm-k"/><path class="okzts2beh wm-a"/><path class="tkbhou2iz wm-k"/><path class="dn06k0bio wm-a"/></g>`,
		"fallback": "withicons:fingerprint-sketch",
	});
}

export default Component;
