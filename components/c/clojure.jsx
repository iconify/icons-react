import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/anab-rb8j.css';
import '../../css/p/phg4t-nee.css';
import '../../css/b/byvgpdxxb.css';
import '../../css/g/g5-bt6p_n.css';
import '../../css/p/pky8uhb9w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="anab-rb8j"/><path class="phg4t-nee"/><path class="byvgpdxxb"/><path class="g5-bt6p_n"/><path class="pky8uhb9w"/></g>`,
		"fallback": "devicon:clojure",
	});
}

export default Component;
