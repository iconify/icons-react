import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwx567bcc.css';
import '../../css/u/u2xzfbbjm.css';
import '../../css/v/ve_snwe4r.css';
import '../../css/h/heg1_clwa.css';
import '../../css/k/keobttshl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a wwx567bcc"/><path class="u2xzfbbjm wm-a"/><path class="ve_snwe4r wm-a"/><path class="heg1_clwa wm-a"/><path class="keobttshl wm-a"/>`,
		"fallback": "withicons-bauhaus:ambulance",
	});
}

export default Component;
