import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4fi1957z.css';
import '../../css/t/ta60wwblw.css';
import '../../css/v/vtwonfutg.css';
import '../../css/a/azxrdyv-q.css';
import '../../css/k/kmel05brv.css';
import '../../css/j/j10-k-gos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c4fi1957z wm-k"/><path class="ta60wwblw wm-k"/><path class="vtwonfutg wm-k"/><path class="azxrdyv-q wm-k"/><path class="kmel05brv wm-shine"/><path class="j10-k-gos wm-a"/></g>`,
		"fallback": "withicons-anime:bookmark-check",
	});
}

export default Component;
