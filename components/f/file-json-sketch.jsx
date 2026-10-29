import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c7dflx-fc.css';
import '../../css/f/f8r3apmab.css';
import '../../css/u/us1ce_bmw.css';
import '../../css/a/asagb8nfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c7dflx-fc"/><path class="f8r3apmab wm-a"/><path class="us1ce_bmw wm-k"/><path class="asagb8nfb wm-a"/></g>`,
		"fallback": "withicons:file-json-sketch",
	});
}

export default Component;
