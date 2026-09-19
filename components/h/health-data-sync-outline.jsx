import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd9s1h7jm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yd9s1h7jm"/>`,
		"fallback": "healthicons:health-data-sync-outline",
	});
}

export default Component;
