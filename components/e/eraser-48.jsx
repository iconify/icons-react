import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcwtdzb8g.css';
import '../../css/r/r8vpsobrj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcwtdzb8g"/><path class="r8vpsobrj"/>`,
		"fallback": "energy-icons:eraser-48",
	});
}

export default Component;
