import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0pce5fyh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0pce5fyh"/>`,
		"fallback": "energy-icons:indent-48",
	});
}

export default Component;
