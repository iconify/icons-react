import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lho_ys8eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lho_ys8eu"/>`,
		"fallback": "mage:box",
	});
}

export default Component;
