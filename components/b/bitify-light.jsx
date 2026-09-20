import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fat_n_bql.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fat_n_bql"/>`,
		"fallback": "selfhst:bitify-light",
	});
}

export default Component;
