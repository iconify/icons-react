import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si1030bhs.css';
import '../../css/e/e0fdkfvpb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si1030bhs"/><path class="e0fdkfvpb"/>`,
		"fallback": "energy-icons:badge-alert-48-bold",
	});
}

export default Component;
