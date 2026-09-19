import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx5-5bc-d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx5-5bc-d"/>`,
		"fallback": "game-icons:diplodocus",
	});
}

export default Component;
