import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d90wrwq5c.css';
import '../../css/h/hdq-ujbiv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d90wrwq5c"/><path class="hdq-ujbiv"/>`,
		"fallback": "energy-icons:home-battery-20",
	});
}

export default Component;
