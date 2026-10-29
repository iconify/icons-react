import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mtqifvxek.css';
import '../../css/g/gq4bevilf.css';
import '../../css/n/ngbgmgbhh.css';
import '../../css/p/phoc4kb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mtqifvxek"/><path class="gq4bevilf wm-a"/><path class="ngbgmgbhh wm-k"/><path class="phoc4kb0a wm-a"/></g>`,
		"fallback": "withicons:headset-sketch",
	});
}

export default Component;
