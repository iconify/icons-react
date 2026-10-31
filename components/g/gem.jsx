import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uenju7b2t.css';
import '../../css/x/xap4q3div.css';
import '../../css/s/sv4c3vbym.css';
import '../../css/x/x1twz_bed.css';
import '../../css/z/z5qsc6boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="uenju7b2t"/><path class="wm-shine xap4q3div"/><path class="sv4c3vbym wm-k"/><path class="wm-a x1twz_bed"/><path class="wm-deco z5qsc6boq"/></g>`,
		"fallback": "withicons-kawaii:gem",
	});
}

export default Component;
