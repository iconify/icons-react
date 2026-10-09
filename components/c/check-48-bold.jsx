import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fko3tyrmh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fko3tyrmh"/>`,
		"fallback": "energy-icons:check-48-bold",
	});
}

export default Component;
