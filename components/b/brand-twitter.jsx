import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_9ma5gfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_9ma5gfp"/>`,
		"fallback": "humbleicons:brand-twitter",
	});
}

export default Component;
