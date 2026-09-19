import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm1u20b0c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm1u20b0c"/>`,
		"fallback": "game-icons:crystal-eye",
	});
}

export default Component;
