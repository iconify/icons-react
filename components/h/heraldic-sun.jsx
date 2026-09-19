import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt4ee93ah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt4ee93ah"/>`,
		"fallback": "game-icons:heraldic-sun",
	});
}

export default Component;
