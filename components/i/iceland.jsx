import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etw1sjxsk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etw1sjxsk"/>`,
		"fallback": "game-icons:iceland",
	});
}

export default Component;
