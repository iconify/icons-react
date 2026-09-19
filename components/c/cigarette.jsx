import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn18foy5l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn18foy5l"/>`,
		"fallback": "game-icons:cigarette",
	});
}

export default Component;
