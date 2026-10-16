import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1p_9z-6l.css';
import '../../css/z/z3rbxgblu.css';
import '../../css/j/j80farb4m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1p_9z-6l"/><path class="z3rbxgblu"/><path class="j80farb4m"/>`,
		"fallback": "energy-icons:folder-tree-48",
	});
}

export default Component;
