import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc42mqxbc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc42mqxbc"/>`,
		"fallback": "energy-icons:divide-48-bold",
	});
}

export default Component;
