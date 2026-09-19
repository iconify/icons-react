import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rulit7brq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rulit7brq"/>`,
		"fallback": "iconoir:home-alt-slim-horiz",
	});
}

export default Component;
