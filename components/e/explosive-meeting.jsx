import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwf780b5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwf780b5s"/>`,
		"fallback": "game-icons:explosive-meeting",
	});
}

export default Component;
