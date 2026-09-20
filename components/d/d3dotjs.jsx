import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqnv71b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqnv71b_g"/>`,
		"fallback": "simple-icons:d3dotjs",
	});
}

export default Component;
