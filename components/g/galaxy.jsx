import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmsjq4c-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmsjq4c-f"/>`,
		"fallback": "game-icons:galaxy",
	});
}

export default Component;
