import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py5hh0bxr.css';
import '../../css/c/cu1d12b6p.css';
import '../../css/d/d5sbbcb9x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py5hh0bxr"/><path class="cu1d12b6p"/><path class="d5sbbcb9x"/>`,
		"fallback": "energy-icons:drawing-compass-48-bold",
	});
}

export default Component;
