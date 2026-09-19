import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgemc-b2d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xgemc-b2d"/>`,
		"fallback": "healthicons:1-outline",
	});
}

export default Component;
