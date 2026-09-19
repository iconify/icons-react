import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e80v1d7eg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e80v1d7eg"/>`,
		"fallback": "game-icons:beach-bucket",
	});
}

export default Component;
