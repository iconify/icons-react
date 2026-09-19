import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va-qs_okh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va-qs_okh"/>`,
		"fallback": "game-icons:alarm-clock",
	});
}

export default Component;
