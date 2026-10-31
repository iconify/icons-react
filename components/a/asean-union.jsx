import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6v__f5su.css';
import '../../css/l/lec6k8bcf.css';
import '../../css/k/kl5yl9bye.css';
import '../../css/s/sb47adcvg.css';
import '../../css/j/jvycs3b0l.css';
import '../../css/l/l6d3p1k_o.css';
import '../../css/w/w2enynbin.css';
import '../../css/d/d_a8l7lwl.css';
import '../../css/b/b53rgbcgd.css';
import '../../css/w/wh5mw-bdo.css';
import '../../css/w/whuvcbbec.css';
import '../../css/p/pvcydzr6m.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6v__f5su"/><path class="lec6k8bcf"/><path class="kl5yl9bye"/><path class="sb47adcvg"/><path class="jvycs3b0l"/><path class="l6d3p1k_o"/><path class="w2enynbin"/><path class="d_a8l7lwl"/><path class="b53rgbcgd"/><path class="wh5mw-bdo"/><path class="whuvcbbec"/><path class="pvcydzr6m"/>`,
		"fallback": "tabler-flags:asean-union",
	});
}

export default Component;
