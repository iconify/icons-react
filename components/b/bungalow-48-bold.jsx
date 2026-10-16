import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrqam2b2u.css';
import '../../css/l/liw2htv9m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrqam2b2u"/><path class="liw2htv9m"/>`,
		"fallback": "energy-icons:bungalow-48-bold",
	});
}

export default Component;
