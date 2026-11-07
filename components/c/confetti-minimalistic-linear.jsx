import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oqo8gcgie.css';
import '../../css/l/l9fa_acaf.css';
import '../../css/n/neilwg2ov.css';
import '../../css/w/wdxo4iqka.css';
import '../../css/t/tkulpsbjv.css';
import '../../css/f/f-9xctdux.css';
import '../../css/d/dyf3d1b7m.css';
import '../../css/v/v39z71izp.css';
import '../../css/g/g8wnwcbls.css';
import '../../css/l/lxiruw8pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oqo8gcgie"/><path class="l9fa_acaf"/><path class="neilwg2ov"/><path class="wdxo4iqka"/><path class="tkulpsbjv"/><path class="f-9xctdux"/><path class="dyf3d1b7m"/><path class="v39z71izp"/><path class="g8wnwcbls"/><path class="lxiruw8pq"/></g>`,
		"fallback": "solar:confetti-minimalistic-linear",
	});
}

export default Component;
