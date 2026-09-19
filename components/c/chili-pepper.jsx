import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzze5jbwi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzze5jbwi"/>`,
		"fallback": "game-icons:chili-pepper",
	});
}

export default Component;
