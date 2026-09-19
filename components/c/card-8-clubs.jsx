import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blzwy-b8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blzwy-b8p"/>`,
		"fallback": "game-icons:card-8-clubs",
	});
}

export default Component;
