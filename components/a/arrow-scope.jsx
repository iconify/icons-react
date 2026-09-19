import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezqx5ys9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezqx5ys9z"/>`,
		"fallback": "game-icons:arrow-scope",
	});
}

export default Component;
