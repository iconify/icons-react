import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtexm5bmy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtexm5bmy"/>`,
		"fallback": "game-icons:abstract-067",
	});
}

export default Component;
