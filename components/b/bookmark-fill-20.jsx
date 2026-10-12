import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-te0_bsy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-te0_bsy"/>`,
		"fallback": "garden:bookmark-fill-20",
	});
}

export default Component;
