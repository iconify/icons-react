import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9rydg4_k.css';
import '../../css/i/i-ta_gb6a.css';
import '../../css/e/eia_b8_wj.css';
import '../../css/q/qukm4rwyl.css';
import '../../css/g/g6j__bcxd.css';
import '../../css/u/utkg5bc2m.css';
import '../../css/v/vdt62-nhi.css';
import '../../css/h/h90hn_lsz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="h9rydg4_k"/><path class="i-ta_gb6a"/><path class="eia_b8_wj"/><path class="qukm4rwyl"/><path class="g6j__bcxd"/><path class="utkg5bc2m"/><path class="vdt62-nhi"/><path class="h90hn_lsz"/>`,
		"fallback": "fxemoji:dragonside",
	});
}

export default Component;
