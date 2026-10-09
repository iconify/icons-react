import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6__lzt8k.css';
import '../../css/t/t50w30baf.css';
import '../../css/s/sfzihbf0j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6__lzt8k"/><path class="t50w30baf"/><path class="sfzihbf0j"/>`,
		"fallback": "energy-icons:cooking-pot-48-bold",
	});
}

export default Component;
