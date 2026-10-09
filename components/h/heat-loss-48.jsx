import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nod0a6b7y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nod0a6b7y"/>`,
		"fallback": "energy-icons:heat-loss-48",
	});
}

export default Component;
