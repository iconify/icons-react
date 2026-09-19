import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibg-916rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibg-916rt"/>`,
		"fallback": "hugeicons:border-left-01",
	});
}

export default Component;
