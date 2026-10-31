import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjlu5-buy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjlu5-buy"/>`,
		"fallback": "coolicons:filter-bulk-round",
	});
}

export default Component;
