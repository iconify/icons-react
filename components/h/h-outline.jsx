import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoip6sbuf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yoip6sbuf"/>`,
		"fallback": "healthicons:h-outline",
	});
}

export default Component;
