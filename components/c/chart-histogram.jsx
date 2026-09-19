import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1pgz2big.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1pgz2big"/>`,
		"fallback": "icon-park-outline:chart-histogram",
	});
}

export default Component;
