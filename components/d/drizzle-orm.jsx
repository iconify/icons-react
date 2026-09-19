import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br5j05_gi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br5j05_gi"/>`,
		"fallback": "bxl:drizzle-orm",
	});
}

export default Component;
