import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/ws6xrvb7o.css';
import '../../css/t/tvqb1fbli.css';
import '../../css/y/yji0ufeoo.css';
import '../../css/t/tijvzhb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ws6xrvb7o"/><path class="tvqb1fbli wm-a"/><path class="wm-k yji0ufeoo"/><path class="tijvzhb8a wm-a"/></g>`,
		"fallback": "withicons:bandage-sketch",
	});
}

export default Component;
