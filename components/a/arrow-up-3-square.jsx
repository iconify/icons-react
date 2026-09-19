import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfl5-fb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfl5-fb6g"/>`,
		"fallback": "iconamoon:arrow-up-3-square",
	});
}

export default Component;
