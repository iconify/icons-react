import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o86c79vyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o86c79vyf"/>`,
		"fallback": "mdi:credit-card-search-outline",
	});
}

export default Component;
