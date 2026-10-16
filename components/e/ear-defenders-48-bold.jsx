import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6feayb0f.css';
import '../../css/p/pi921jb9m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6feayb0f"/><path class="pi921jb9m"/>`,
		"fallback": "energy-icons:ear-defenders-48-bold",
	});
}

export default Component;
