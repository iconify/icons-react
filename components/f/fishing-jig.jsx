import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iebocxbzf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iebocxbzf"/>`,
		"fallback": "game-icons:fishing-jig",
	});
}

export default Component;
