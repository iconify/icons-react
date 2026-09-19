import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8jtws1hs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8jtws1hs"/>`,
		"fallback": "game-icons:flying-beetle",
	});
}

export default Component;
