import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/or375cb4p.css';
import '../../css/q/q314hnbpq.css';
import '../../css/r/r91zadc9l.css';
import '../../css/d/du4e4tbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="or375cb4p"/><path class="q314hnbpq wm-a"/><path class="r91zadc9l wm-k"/><path class="du4e4tbta wm-a"/></g>`,
		"fallback": "withicons:file-check-sketch",
	});
}

export default Component;
