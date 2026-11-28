import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2we6kbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2we6kbtc"/>`,
		"fallback": "noviair-light:image-search",
	});
}

export default Component;
