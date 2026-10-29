import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zq8hvpbkq.css';
import '../../css/c/cwu1pjnsx.css';
import '../../css/i/ip4n81bia.css';
import '../../css/a/azlgkxb_e.css';
import '../../css/l/l_nfeebxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zq8hvpbkq"/><path class="cwu1pjnsx wm-k"/><path class="ip4n81bia wm-s"/><path class="azlgkxb_e wm-k"/><path class="l_nfeebxw wm-s"/></g>`,
		"fallback": "withicons:cloud-check-sketch",
	});
}

export default Component;
