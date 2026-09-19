import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwi5c5bur.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwi5c5bur"/>`,
		"fallback": "icon-park-outline:check",
	});
}

export default Component;
