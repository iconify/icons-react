import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbys_lb8n.css';
import '../../css/y/ykkgrkb-l.css';
import '../../css/d/d-kptbbco.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbys_lb8n"/><path class="ykkgrkb-l"/><path class="d-kptbbco"/>`,
		"fallback": "energy-icons:gas-meter-20-bold",
	});
}

export default Component;
