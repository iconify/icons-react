import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9-d4cb5f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9-d4cb5f"/>`,
		"fallback": "game-icons:hunter-eyes",
	});
}

export default Component;
