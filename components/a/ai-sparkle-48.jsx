import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh2lvo64r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh2lvo64r"/>`,
		"fallback": "energy-icons:ai-sparkle-48",
	});
}

export default Component;
