import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lixo2qb2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lixo2qb2q"/>`,
		"fallback": "game-icons:dead-head",
	});
}

export default Component;
