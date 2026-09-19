import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t88s3pb8b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t88s3pb8b"/>`,
		"fallback": "game-icons:fishing-spoon",
	});
}

export default Component;
