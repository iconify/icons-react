import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtvm8qbid.css';
import '../../css/n/n1vzbldsk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtvm8qbid"/><path class="n1vzbldsk"/>`,
		"fallback": "energy-icons:arrows-horizontal-48-bold",
	});
}

export default Component;
