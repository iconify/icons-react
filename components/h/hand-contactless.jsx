import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hhclp-bmx.css';
import '../../css/v/vwe9oyznd.css';
import '../../css/s/s71sv1b9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hhclp-bmx"/><path class="vwe9oyznd"/><path class="s71sv1b9k"/></g>`,
		"fallback": "iconoir:hand-contactless",
	});
}

export default Component;
