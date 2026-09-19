import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqmzj2bag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqmzj2bag"/>`,
		"fallback": "bxs:adjust-alt",
	});
}

export default Component;
