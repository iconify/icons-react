import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h7rivybxz.css';
import '../../css/d/duqi2qd2c.css';
import '../../css/c/cejojzb_s.css';
import '../../css/w/wqu703b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h7rivybxz wm-k"/><path class="duqi2qd2c wm-a"/><path class="cejojzb_s wm-k"/><path class="wm-a wqu703b3u"/></g>`,
		"fallback": "withicons:avatar-woman-hijab-sketch",
	});
}

export default Component;
