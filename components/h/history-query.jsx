import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mhrr42g8a.css';
import '../../css/u/u365hhbxy.css';
import '../../css/l/l7sdvlbrp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="mhrr42g8a"/><circle class="u365hhbxy"/><path class="l7sdvlbrp"/></g>`,
		"fallback": "icon-park-outline:history-query",
	});
}

export default Component;
