import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x36c-ssbq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x36c-ssbq"/>`,
		"fallback": "game-icons:injustice",
	});
}

export default Component;
