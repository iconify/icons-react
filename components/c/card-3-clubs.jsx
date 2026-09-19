import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp8lhrqrc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp8lhrqrc"/>`,
		"fallback": "game-icons:card-3-clubs",
	});
}

export default Component;
