import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aewd6phtx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aewd6phtx"/>`,
		"fallback": "game-icons:curled-leaf",
	});
}

export default Component;
