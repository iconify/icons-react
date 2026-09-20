import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f00jo0q8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f00jo0q8q"/>`,
		"fallback": "mdi:dog-side-off",
	});
}

export default Component;
