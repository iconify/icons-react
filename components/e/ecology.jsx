import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqv9c1ert.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqv9c1ert"/>`,
		"fallback": "game-icons:ecology",
	});
}

export default Component;
