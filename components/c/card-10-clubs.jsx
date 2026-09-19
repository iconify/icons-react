import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyl_5zpad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyl_5zpad"/>`,
		"fallback": "game-icons:card-10-clubs",
	});
}

export default Component;
