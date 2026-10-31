import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/s/s3bstln7l.css';
import '../../css/g/glrwe-b3k.css';
import '../../css/k/ky81uacoq.css';
import '../../css/x/xwqjbjblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGi2wmocos" x1="0" x2="0" y1="1.19" y2="22.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGUv3Ncdjg" x1=".67" x2="22" y1="1.19" y2="22.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGi2wmocos)" stroke="url(#SVGUv3Ncdjg)" class="s3bstln7l wm-k"/><path stroke="url(#SVGUv3Ncdjg)" class="glrwe-b3k wm-s"/><path class="ky81uacoq wm-shine"/><path class="wm-shine xwqjbjblj"/></g>`,
		"fallback": "withicons-lunar:holi-splash",
	});
}

export default Component;
