import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_o5gub2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_o5gub2q"/>`,
		"fallback": "game-icons:cyborg-face",
	});
}

export default Component;
