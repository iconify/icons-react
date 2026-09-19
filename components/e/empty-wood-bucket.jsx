import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jehpac4mc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jehpac4mc"/>`,
		"fallback": "game-icons:empty-wood-bucket",
	});
}

export default Component;
