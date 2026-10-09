import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no8_0h65g.css';
import '../../css/e/eyio-_5vq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no8_0h65g"/><path class="eyio-_5vq"/>`,
		"fallback": "energy-icons:depot-charging-20",
	});
}

export default Component;
