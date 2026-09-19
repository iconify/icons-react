import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-u1sk9yu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-u1sk9yu"/>`,
		"fallback": "catppuccin:drizzle-orm",
	});
}

export default Component;
