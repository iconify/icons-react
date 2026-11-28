import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2-3w5b0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2-3w5b0q"/>`,
		"fallback": "noviair:contract-search",
	});
}

export default Component;
