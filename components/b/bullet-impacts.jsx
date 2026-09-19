import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a17q4j8vy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a17q4j8vy"/>`,
		"fallback": "game-icons:bullet-impacts",
	});
}

export default Component;
