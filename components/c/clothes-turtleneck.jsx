import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg1s_bx-g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg1s_bx-g"/>`,
		"fallback": "icon-park-outline:clothes-turtleneck",
	});
}

export default Component;
