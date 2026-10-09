import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhnl4rs5r.css';
import '../../css/c/cj33u3imh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhnl4rs5r"/><path class="cj33u3imh"/>`,
		"fallback": "energy-icons:cooling-tower-48-bold",
	});
}

export default Component;
