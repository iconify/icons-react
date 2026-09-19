import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phb35-bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phb35-bww"/>`,
		"fallback": "bxs:badge-dollar",
	});
}

export default Component;
