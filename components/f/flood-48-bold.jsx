import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvz99qbcs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvz99qbcs"/>`,
		"fallback": "energy-icons:flood-48-bold",
	});
}

export default Component;
