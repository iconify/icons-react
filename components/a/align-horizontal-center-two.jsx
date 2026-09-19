import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd13eg0ma.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd13eg0ma"/>`,
		"fallback": "icon-park-solid:align-horizontal-center-two",
	});
}

export default Component;
