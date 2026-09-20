import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/adsmbghfb.css';
import '../../css/t/tuubzrbrm.css';
import '../../css/n/nikgb_thu.css';
import '../../css/c/ckfoqpbve.css';
import '../../css/f/fxfqg2b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="adsmbghfb"/><path class="tuubzrbrm"/><circle class="nikgb_thu"/><circle class="ckfoqpbve"/><path class="fxfqg2b5h"/></g>`,
		"fallback": "majesticons:incognito",
	});
}

export default Component;
