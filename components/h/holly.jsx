import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/e/e5-tsd3em.css';
import '../../css/n/ntkbzjkig.css';
import '../../css/p/p338dnboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGZZX2r1JT" x1="0" x2="0" y1="1.65" y2="20.74" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGguazeenC" x1="1.75" x2="22.25" y1="1.65" y2="20.74" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGZZX2r1JT)" stroke="url(#SVGguazeenC)" class="e5-tsd3em wm-k"/><path fill="url(#SVGguazeenC)" class="ntkbzjkig wm-a"/><path class="p338dnboq wm-shine"/></g>`,
		"fallback": "withicons-lunar:holly",
	});
}

export default Component;
