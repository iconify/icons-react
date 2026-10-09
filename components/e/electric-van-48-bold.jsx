import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il6d4vbnm.css';
import '../../css/o/o244yobqh.css';
import '../../css/d/d39zil3no.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il6d4vbnm"/><path class="o244yobqh"/><path class="d39zil3no"/>`,
		"fallback": "energy-icons:electric-van-48-bold",
	});
}

export default Component;
