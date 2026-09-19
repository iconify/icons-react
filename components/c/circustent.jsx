import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kon5sfguv.css';
import '../../css/u/uliylibul.css';
import '../../css/o/oeu21hwrb.css';
import '../../css/s/s_cx4j7yo.css';
import '../../css/e/ekw3nxhog.css';
import '../../css/d/dkriu_cya.css';
import '../../css/c/c62kn8s4o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kon5sfguv"/><path class="uliylibul"/><path class="oeu21hwrb"/><path class="s_cx4j7yo"/><path class="ekw3nxhog"/><path class="dkriu_cya"/><path class="c62kn8s4o"/>`,
		"fallback": "fxemoji:circustent",
	});
}

export default Component;
