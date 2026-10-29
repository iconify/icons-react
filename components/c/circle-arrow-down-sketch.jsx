import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bxiujei5b.css';
import '../../css/q/qrlq0qbok.css';
import '../../css/s/s7vwfzb4c.css';
import '../../css/d/d0tiy9blv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bxiujei5b"/><path class="qrlq0qbok wm-k"/><path class="s7vwfzb4c wm-a"/><path class="d0tiy9blv wm-a"/></g>`,
		"fallback": "withicons:circle-arrow-down-sketch",
	});
}

export default Component;
