import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg221mb-j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg221mb-j"/>`,
		"fallback": "game-icons:evil-tower",
	});
}

export default Component;
