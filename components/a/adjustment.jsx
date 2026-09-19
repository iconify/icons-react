import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzq76kk3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzq76kk3e"/>`,
		"fallback": "icon-park-outline:adjustment",
	});
}

export default Component;
