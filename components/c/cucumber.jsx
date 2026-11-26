import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0cwracmm.css';
import '../../css/f/f54vj-bdy.css';
import '../../css/i/iptsaxbho.css';
import '../../css/b/bbt9pevmt.css';
import '../../css/r/r6xwvgb6m.css';
import '../../css/l/l1lrdsexr.css';
import '../../css/i/imri62kel.css';
import '../../css/g/gil5j_bbn.css';
import '../../css/t/tjdv7iuxz.css';
import '../../css/s/sj12rubqp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGiSo7oSDa" cx="75.5" cy="65.8" r="148.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="m0cwracmm"/><stop offset=".85" class="f54vj-bdy"/><stop offset="1" class="f54vj-bdy"/></radialGradient></defs><g transform="matrix(2.6 0 0 2.6 -12.366 -16.776)"><path class="iptsaxbho"/><path fill="url(#SVGiSo7oSDa)" class="bbt9pevmt"/><ellipse class="r6xwvgb6m"/><ellipse class="l1lrdsexr"/><ellipse class="imri62kel"/><ellipse class="gil5j_bbn"/><ellipse class="tjdv7iuxz"/><path class="sj12rubqp"/></g>`,
		"fallback": "xero-emoji:cucumber",
	});
}

export default Component;
