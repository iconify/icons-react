import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv3g54blv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv3g54blv"/>`,
		"fallback": "game-icons:coffee-pot",
	});
}

export default Component;
