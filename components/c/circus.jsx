import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/o/ofglf_bls.css';
import '../../css/n/nlm1rl9vu.css';
import '../../css/m/mk1236bqy.css';
import '../../css/m/mzs7sub3g.css';
import '../../css/o/oqrnd209j.css';
import '../../css/q/q_1fi-bxw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="ofglf_bls"/><path class="nlm1rl9vu"/><path class="mk1236bqy"/><path class="mzs7sub3g"/><path class="oqrnd209j"/><path class="q_1fi-bxw"/></g>`,
		"fallback": "icon-park:circus",
	});
}

export default Component;
