import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9ejkab4k.css';
import '../../css/l/l54utlx8r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9ejkab4k"/><path class="l54utlx8r"/>`,
		"fallback": "energy-icons:banknote-48-bold",
	});
}

export default Component;
