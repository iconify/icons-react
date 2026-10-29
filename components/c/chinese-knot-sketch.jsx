import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uoqh7ofly.css';
import '../../css/f/fwrdtm7of.css';
import '../../css/x/x1dfjybuh.css';
import '../../css/o/oq5cfub0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uoqh7ofly wm-k"/><path class="fwrdtm7of wm-k"/><path class="wm-a x1dfjybuh"/><path class="oq5cfub0i wm-a"/></g>`,
		"fallback": "withicons:chinese-knot-sketch",
	});
}

export default Component;
