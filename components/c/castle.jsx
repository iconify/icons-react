import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5pxl8sqt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5pxl8sqt"/>`,
		"fallback": "icon-park-outline:castle",
	});
}

export default Component;
