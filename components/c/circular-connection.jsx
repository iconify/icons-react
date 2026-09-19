import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/evcx3abrv.css';
import '../../css/m/me_qvif1b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="evcx3abrv"/><path class="me_qvif1b"/></g>`,
		"fallback": "icon-park-solid:circular-connection",
	});
}

export default Component;
