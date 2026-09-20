import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gazz5ebes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gazz5ebes"/>`,
		"fallback": "pixel:bookmark-solid",
	});
}

export default Component;
