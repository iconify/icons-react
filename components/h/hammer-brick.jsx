import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igu13zvhn.css';
import '../../css/c/cc95nhbwg.css';
import '../../css/y/ydeutyb7f.css';
import '../../css/s/s3eu2ib-m.css';
import '../../css/b/bz6gjxjqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="igu13zvhn"/><path class="cc95nhbwg"/><path class="ydeutyb7f"/><path clip-rule="evenodd" class="s3eu2ib-m"/><path class="bz6gjxjqc"/></g>`,
		"fallback": "andrsrxn:hammer-brick",
	});
}

export default Component;
