import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gka0e7bkk.css';
import '../../css/j/jwwb_xbwf.css';
import '../../css/y/yvq0q9f5t.css';
import '../../css/i/iazd5_bwo.css';
import '../../css/g/gm4zqi3nx.css';
import '../../css/a/ags6jncqu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGxeyKmbvB" x1="201.4" x2="287.6" y1="171.6" y2="320.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="gka0e7bkk"/><stop offset=".5" class="gka0e7bkk"/><stop offset="1" class="jwwb_xbwf"/></linearGradient><linearGradient id="SVGXDHcieJY" x1="227.2" x2="284.9" y1="282" y2="382" gradientUnits="userSpaceOnUse"><stop offset="0" class="yvq0q9f5t"/><stop offset=".5" class="yvq0q9f5t"/><stop offset="1" class="iazd5_bwo"/></linearGradient></defs><g><path fill="url(#SVGxeyKmbvB)" class="gm4zqi3nx"/><rect fill="url(#SVGXDHcieJY)" class="ags6jncqu"/><animateTransform id="SVGfY1CHcFo" additive="sum" attributeName="transform" begin="0s; x1.end+1.75s" calcMode="spline" dur="1.25s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" type="rotate" values="0 256 332; 0 256 332; -15 256 332; 15 256 332; -9 256 332; 9 256 332; -6 256 332; 3 256 332; 0 256 332"/></g>`,
		"fallback": "meteocons:glove-fill",
	});
}

export default Component;
