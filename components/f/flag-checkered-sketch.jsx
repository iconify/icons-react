import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/li_e4ibwl.css';
import '../../css/m/moh80718a.css';
import '../../css/a/astts52ej.css';
import '../../css/t/tz8pg4bwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="li_e4ibwl wm-k"/><path class="moh80718a wm-a"/><path class="astts52ej wm-k"/><path class="tz8pg4bwr wm-a"/></g>`,
		"fallback": "withicons:flag-checkered-sketch",
	});
}

export default Component;
