import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg1bb7shi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg1bb7shi"/>`,
		"fallback": "game-icons:desk",
	});
}

export default Component;
