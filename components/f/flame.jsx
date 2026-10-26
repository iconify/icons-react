import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/p/p8_jezbca.css';
import '../../css/j/jiegxjirx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="p8_jezbca"/><path class="jiegxjirx"/></g>`,
		"fallback": "doodle-icons:flame",
	});
}

export default Component;
