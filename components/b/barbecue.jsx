import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywx0g0bvq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywx0g0bvq"/>`,
		"fallback": "game-icons:barbecue",
	});
}

export default Component;
