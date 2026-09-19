import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac2afac4n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac2afac4n"/>`,
		"fallback": "game-icons:hidden",
	});
}

export default Component;
