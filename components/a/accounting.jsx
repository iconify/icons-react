import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb1hd8b6p.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb1hd8b6p"/>`,
		"fallback": "map:accounting",
	});
}

export default Component;
