import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgo-bn5bm.css';
import '../../css/d/dsjehubcj.css';
import '../../css/s/syfylxqea.css';
import '../../css/u/uq11f0fet.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgo-bn5bm"/><path class="dsjehubcj"/><path class="syfylxqea"/><path class="uq11f0fet"/>`,
		"fallback": "energy-icons:building-x-48-bold",
	});
}

export default Component;
