import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqglfy7gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqglfy7gf"/>`,
		"fallback": "tabler:arrow-narrow-right-dashed",
	});
}

export default Component;
