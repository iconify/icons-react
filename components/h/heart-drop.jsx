import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge3_ow_4q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge3_ow_4q"/>`,
		"fallback": "game-icons:heart-drop",
	});
}

export default Component;
