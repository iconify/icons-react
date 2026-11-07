import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kblr0i4fy.css';
import '../../css/l/l9fa_acaf.css';
import '../../css/n/neilwg2ov.css';
import '../../css/w/wdxo4iqka.css';
import '../../css/t/tkulpsbjv.css';
import '../../css/s/s3f6isbfy.css';
import '../../css/s/sok0n3swb.css';
import '../../css/v/v39z71izp.css';
import '../../css/m/mqp9-h64y.css';
import '../../css/v/v1wdoipqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kblr0i4fy"/><path class="l9fa_acaf"/><path class="neilwg2ov"/><path class="wdxo4iqka"/><path class="tkulpsbjv"/><path class="s3f6isbfy"/><path class="sok0n3swb"/><path class="v39z71izp"/><path class="mqp9-h64y"/><path class="v1wdoipqz"/></g>`,
		"fallback": "solar:confetti-minimalistic-broken",
	});
}

export default Component;
