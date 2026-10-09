import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xujk5fdpi.css';
import '../../css/e/e5asi9aud.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xujk5fdpi"/><path class="e5asi9aud"/>`,
		"fallback": "energy-icons:electric-truck-48",
	});
}

export default Component;
