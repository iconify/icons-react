import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u506o2_2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u506o2_2r"/>`,
		"fallback": "stash:headphones-light",
	});
}

export default Component;
