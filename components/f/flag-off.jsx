import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/c/cn970gahh.css';
import '../../css/l/l2sj8fbjg.css';
import '../../css/o/oserv5b7s.css';
import '../../css/g/gtops9buw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGKDMHhdAT" x1="0" x2="0" y1="1.56" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGVkhEpdlG" x1="2.01" x2="22" y1="1.56" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGKDMHhdAT)" stroke="url(#SVGVkhEpdlG)" class="cn970gahh wm-k"/><path stroke="url(#SVGVkhEpdlG)" class="l2sj8fbjg wm-s"/><path class="oserv5b7s wm-shine"/><path class="gtops9buw wm-shine"/></g>`,
		"fallback": "withicons-lunar:flag-off",
	});
}

export default Component;
