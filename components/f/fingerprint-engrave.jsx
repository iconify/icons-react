import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bhrl3db-r.css';
import '../../css/i/immdxpb6m.css';
import '../../css/q/q-ca_6bsx.css';
import '../../css/w/w4fklccqs.css';
import '../../css/x/x2wfbzbcz.css';
import '../../css/f/fkvw3pbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bhrl3db-r wm-k"/><path class="immdxpb6m wm-a"/><path class="q-ca_6bsx wm-shadow"/><path class="w4fklccqs wm-k"/><path class="wm-a x2wfbzbcz"/><path class="fkvw3pbgy wm-a"/></g>`,
		"fallback": "withicons:fingerprint-engrave",
	});
}

export default Component;
