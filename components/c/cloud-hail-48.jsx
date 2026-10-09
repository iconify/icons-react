import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga3091btq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga3091btq"/>`,
		"fallback": "energy-icons:cloud-hail-48",
	});
}

export default Component;
