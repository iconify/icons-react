import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_0isqx2s.css';
import '../../css/q/qx69j2ppm.css';
import '../../css/p/p10a-2b7f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_0isqx2s"/><path class="qx69j2ppm"/><path class="p10a-2b7f"/>`,
		"fallback": "energy-icons:geyser-20-bold",
	});
}

export default Component;
