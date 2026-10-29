import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vwgy1sbhs.css';
import '../../css/u/uel4uba9h.css';
import '../../css/b/bht756bnp.css';
import '../../css/g/g136touho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vwgy1sbhs wm-k"/><path class="uel4uba9h wm-shadow"/><path class="bht756bnp wm-k"/><path class="g136touho wm-a"/></g>`,
		"fallback": "withicons:app-window-engrave",
	});
}

export default Component;
