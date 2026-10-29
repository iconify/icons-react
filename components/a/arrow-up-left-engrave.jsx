import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ofk9q-bmu.css';
import '../../css/h/hdr-12bxz.css';
import '../../css/b/b2-9zihvx.css';
import '../../css/r/rir49oswk.css';
import '../../css/q/qbet6fbaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ofk9q-bmu wm-k"/><path class="hdr-12bxz wm-a"/><path class="b2-9zihvx wm-shadow"/><path class="rir49oswk wm-k"/><path class="qbet6fbaw wm-a"/></g>`,
		"fallback": "withicons:arrow-up-left-engrave",
	});
}

export default Component;
