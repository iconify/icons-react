import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhfbtcy6k.css';
import '../../css/c/cf6_evf1k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhfbtcy6k"/><path class="cf6_evf1k"/>`,
		"fallback": "energy-icons:deforestation-48-bold",
	});
}

export default Component;
