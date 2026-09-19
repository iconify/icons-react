import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crf5lachd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crf5lachd"/>`,
		"fallback": "game-icons:byzantin-temple",
	});
}

export default Component;
