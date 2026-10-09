import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q70ah7b4t.css';
import '../../css/g/ggzqnruty.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/d/d_u133t5n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q70ah7b4t"/><path class="ggzqnruty"/><path class="hwjgqrbah"/><path class="d_u133t5n"/>`,
		"fallback": "energy-icons:electric-car-check-48-bold",
	});
}

export default Component;
