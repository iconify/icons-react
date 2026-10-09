import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iij7ri-7j.css';
import '../../css/k/k_0c2xn7m.css';
import '../../css/s/st8n3_8ji.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iij7ri-7j"/><path class="k_0c2xn7m"/><path class="st8n3_8ji"/>`,
		"fallback": "energy-icons:airport-48",
	});
}

export default Component;
