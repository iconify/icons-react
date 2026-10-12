import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4ifueief.css';
import '../../css/v/v2yg3bceh.css';
import '../../css/w/w762ysbrb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4ifueief"/><path class="v2yg3bceh"/><path class="w762ysbrb"/>`,
		"fallback": "energy-icons:blood-drop-48-bold",
	});
}

export default Component;
