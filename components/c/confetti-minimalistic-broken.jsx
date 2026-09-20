import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fpj59hb7e.css';
import '../../css/r/rupdftbkv.css';
import '../../css/n/neilwg2ov.css';
import '../../css/p/pnj2h7f9i.css';
import '../../css/t/tkulpsbjv.css';
import '../../css/f/f-9xctdux.css';
import '../../css/i/iggantbge.css';
import '../../css/v/v39z71izp.css';
import '../../css/g/g8wnwcbls.css';
import '../../css/v/vq5o5pbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fpj59hb7e"/><path class="rupdftbkv"/><path class="neilwg2ov"/><path class="pnj2h7f9i"/><path class="tkulpsbjv"/><path class="f-9xctdux"/><path class="iggantbge"/><path class="v39z71izp"/><path class="g8wnwcbls"/><path class="vq5o5pbtn"/></g>`,
		"fallback": "solar:confetti-minimalistic-broken",
	});
}

export default Component;
