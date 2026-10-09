import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xco8ivb8f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xco8ivb8f"/>`,
		"fallback": "energy-icons:fog-48-bold",
	});
}

export default Component;
