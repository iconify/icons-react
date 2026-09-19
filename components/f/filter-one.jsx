import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdt38crvs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdt38crvs"/>`,
		"fallback": "icon-park-outline:filter-one",
	});
}

export default Component;
