import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es-ks4ent.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es-ks4ent"/>`,
		"fallback": "wpf:autopilot",
	});
}

export default Component;
