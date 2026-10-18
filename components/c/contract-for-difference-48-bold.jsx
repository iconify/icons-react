import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_pz3rxhk.css';
import '../../css/y/y6w07qbtw.css';
import '../../css/p/pfe8gjbwd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_pz3rxhk"/><path class="y6w07qbtw"/><path class="pfe8gjbwd"/>`,
		"fallback": "energy-icons:contract-for-difference-48-bold",
	});
}

export default Component;
