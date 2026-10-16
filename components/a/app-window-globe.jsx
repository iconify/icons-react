import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lg48bpcge.css';
import '../../css/l/l30-5vb5s.css';
import '../../css/x/x3pawtpgt.css';
import '../../css/g/gumqc9euk.css';
import '../../css/q/qy64zmblh.css';
import '../../css/s/sh-eo5bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lg48bpcge"/><path class="l30-5vb5s"/><path class="x3pawtpgt"/><circle transform="rotate(90 16.55 16.53)" class="gumqc9euk"/><ellipse transform="rotate(90 16.55 16.53)" class="qy64zmblh"/><path class="sh-eo5bhv"/></g>`,
		"fallback": "andrsrxn:app-window-globe",
	});
}

export default Component;
