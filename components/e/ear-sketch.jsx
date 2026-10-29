import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p7i0qepff.css';
import '../../css/z/zkeo5mycj.css';
import '../../css/s/sa4mc4iol.css';
import '../../css/i/it_2xjlfu.css';
import '../../css/e/e9lwaol1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p7i0qepff"/><path class="wm-k zkeo5mycj"/><path class="sa4mc4iol wm-a"/><path class="it_2xjlfu wm-k"/><path class="e9lwaol1z wm-a"/></g>`,
		"fallback": "withicons:ear-sketch",
	});
}

export default Component;
