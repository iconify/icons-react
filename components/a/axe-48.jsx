import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwf5pgm1r.css';
import '../../css/d/d_be55btx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwf5pgm1r"/><path class="d_be55btx"/>`,
		"fallback": "energy-icons:axe-48",
	});
}

export default Component;
