import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7de_1bdc.css';
import '../../css/d/djawiyg4a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7de_1bdc"/><path class="djawiyg4a"/>`,
		"fallback": "energy-icons:gloves-48-bold",
	});
}

export default Component;
