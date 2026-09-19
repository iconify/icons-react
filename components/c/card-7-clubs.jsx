import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myi4758lh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myi4758lh"/>`,
		"fallback": "game-icons:card-7-clubs",
	});
}

export default Component;
