import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aje9tziax.css';
import '../../css/t/tn-n_vbiw.css';
import '../../css/u/uz5oogqro.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/o7jksbgqt.css';
import '../../css/w/wg2cbgb-f.css';
import '../../css/w/wb56pbc3h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aje9tziax"/><path class="tn-n_vbiw"/><path class="uz5oogqro"/><g class="jn8qy4bru"><path class="o7jksbgqt"/><path class="wg2cbgb-f"/><path class="wb56pbc3h"/></g>`,
		"fallback": "openmoji:double-tap",
	});
}

export default Component;
