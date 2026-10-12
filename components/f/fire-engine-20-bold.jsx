import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1fi5_bhd.css';
import '../../css/p/p7vazbcay.css';
import '../../css/d/dgu6khf1m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1fi5_bhd"/><path class="p7vazbcay"/><path class="dgu6khf1m"/>`,
		"fallback": "energy-icons:fire-engine-20-bold",
	});
}

export default Component;
