import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hnut4_biv.css';
import '../../css/s/s-k1_mf2k.css';
import '../../css/a/axni4fzcl.css';
import '../../css/i/isx3pjbzb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="hnut4_biv"/><path class="s-k1_mf2k"/><rect class="axni4fzcl"/><rect class="isx3pjbzb"/></g>`,
		"fallback": "icon-park-outline:game-console-one",
	});
}

export default Component;
