import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd1w1xrrd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd1w1xrrd"/>`,
		"fallback": "game-icons:anvil-impact",
	});
}

export default Component;
