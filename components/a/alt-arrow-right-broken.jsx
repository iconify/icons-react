import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz-yv_bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz-yv_bhh"/>`,
		"fallback": "solar:alt-arrow-right-broken",
	});
}

export default Component;
