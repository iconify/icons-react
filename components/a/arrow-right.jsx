import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1k_3abfw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1k_3abfw"/>`,
		"fallback": "icon-park-outline:arrow-right",
	});
}

export default Component;
