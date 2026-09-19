import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djgefvbap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djgefvbap"/>`,
		"fallback": "icon-park-outline:fitness",
	});
}

export default Component;
