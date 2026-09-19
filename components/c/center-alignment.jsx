import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8r0qnbcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8r0qnbcn"/>`,
		"fallback": "icon-park-outline:center-alignment",
	});
}

export default Component;
