import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkc0ul0xf.css';
import '../../css/j/jgs4mub3w.css';
import '../../css/l/led_7kbkl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkc0ul0xf"/><path class="jgs4mub3w"/><path class="led_7kbkl"/>`,
		"fallback": "energy-icons:external-link-48-bold",
	});
}

export default Component;
