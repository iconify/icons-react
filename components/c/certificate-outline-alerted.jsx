import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsnaudczl.css';
import '../../css/n/ns55fvgze.css';
import '../../css/p/pidhzkbvr.css';
import '../../css/h/h-colbb7g.css';
import '../../css/x/xyofocbfo.css';
import '../../css/f/fuygwccfp.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted wsnaudczl"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted ns55fvgze"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted pidhzkbvr"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted h-colbb7g"/><path class="clr-i-outline--alerted clr-i-outline-path-5--alerted xyofocbfo"/><path class="clr-i-outline--alerted clr-i-outline-path-6--alerted fuygwccfp"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-7--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:certificate-outline-alerted",
	});
}

export default Component;
