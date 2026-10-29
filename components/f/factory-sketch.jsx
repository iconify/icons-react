import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b6r623bpq.css';
import '../../css/w/wmfn8sbna.css';
import '../../css/e/ew51tmbbl.css';
import '../../css/c/cvqya5bkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b6r623bpq"/><path class="wm-k wmfn8sbna"/><path class="ew51tmbbl wm-k"/><path class="cvqya5bkd wm-a"/></g>`,
		"fallback": "withicons:factory-sketch",
	});
}

export default Component;
