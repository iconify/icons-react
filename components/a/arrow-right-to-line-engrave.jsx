import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uvnqbw1ky.css';
import '../../css/e/e2vntlx_k.css';
import '../../css/t/tavb7nbpf.css';
import '../../css/s/s-orxf9cs.css';
import '../../css/z/z-jqc1b6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uvnqbw1ky wm-k"/><path class="e2vntlx_k wm-a"/><path class="tavb7nbpf wm-shadow"/><path class="s-orxf9cs wm-a"/><path class="wm-k z-jqc1b6a"/></g>`,
		"fallback": "withicons:arrow-right-to-line-engrave",
	});
}

export default Component;
