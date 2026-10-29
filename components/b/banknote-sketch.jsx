import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nof7gjbxm.css';
import '../../css/y/yz3ko5bsq.css';
import '../../css/i/itk1anblx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nof7gjbxm"/><path class="wm-k yz3ko5bsq"/><path class="itk1anblx wm-a"/></g>`,
		"fallback": "withicons:banknote-sketch",
	});
}

export default Component;
