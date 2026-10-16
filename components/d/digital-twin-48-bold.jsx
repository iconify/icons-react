import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huab2dirh.css';
import '../../css/o/o6zu0fbsa.css';
import '../../css/i/ik1ojz0cj.css';
import '../../css/m/m85qfgb7r.css';
import '../../css/r/ry-_esbkh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huab2dirh"/><path class="o6zu0fbsa"/><path class="ik1ojz0cj"/><path class="m85qfgb7r"/><path class="ry-_esbkh"/>`,
		"fallback": "energy-icons:digital-twin-48-bold",
	});
}

export default Component;
