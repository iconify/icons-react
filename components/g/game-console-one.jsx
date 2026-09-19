import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hnut4_biv.css';
import '../../css/f/fd7e-ub1q.css';
import '../../css/k/kzzr0gbqg.css';
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
		"content": `<g class="ft5dv1b6b"><rect class="hnut4_biv"/><path class="fd7e-ub1q"/><path class="kzzr0gbqg"/><rect class="axni4fzcl"/><rect class="isx3pjbzb"/></g>`,
		"fallback": "icon-park-solid:game-console-one",
	});
}

export default Component;
