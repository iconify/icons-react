import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwt9oobxw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwt9oobxw"/>`,
		"fallback": "game-icons:ice-bomb",
	});
}

export default Component;
