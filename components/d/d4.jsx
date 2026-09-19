import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9de-4b3i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9de-4b3i"/>`,
		"fallback": "game-icons:d4",
	});
}

export default Component;
