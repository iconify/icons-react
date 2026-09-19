import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx371419d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx371419d"/>`,
		"fallback": "game-icons:card-9-clubs",
	});
}

export default Component;
