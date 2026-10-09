import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze5c6ablq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze5c6ablq"/>`,
		"fallback": "energy-icons:cloud-snow-48",
	});
}

export default Component;
