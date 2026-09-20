import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/ee_pu_b1y.css';
import '../../css/q/q6m95sk9a.css';
import '../../css/z/z0qudebpo.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ee_pu_b1y"/><path class="q6m95sk9a"/><path class="z0qudebpo"/></g>`,
		"fallback": "marketeq:gold-medal-6",
	});
}

export default Component;
