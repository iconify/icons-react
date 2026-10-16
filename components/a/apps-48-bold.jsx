import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0g8a-baj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0g8a-baj"/>`,
		"fallback": "energy-icons:apps-48-bold",
	});
}

export default Component;
