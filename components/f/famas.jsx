import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y48l-qb2a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y48l-qb2a"/>`,
		"fallback": "game-icons:famas",
	});
}

export default Component;
