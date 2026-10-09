import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqabahbkv.css';
import '../../css/a/awqfydw7r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqabahbkv"/><path class="awqfydw7r"/>`,
		"fallback": "energy-icons:coffee-48-bold",
	});
}

export default Component;
