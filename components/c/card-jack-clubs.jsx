import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ups-hk70t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ups-hk70t"/>`,
		"fallback": "game-icons:card-jack-clubs",
	});
}

export default Component;
