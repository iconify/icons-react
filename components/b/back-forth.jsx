import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f81_s03iz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f81_s03iz"/>`,
		"fallback": "game-icons:back-forth",
	});
}

export default Component;
