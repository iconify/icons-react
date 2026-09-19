import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-6326bns.css';
import '../../css/h/h2clnuigs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-6326bns"/><path class="h2clnuigs"/>`,
		"fallback": "icon-park-solid:apple",
	});
}

export default Component;
