import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghf65hbht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghf65hbht"/>`,
		"fallback": "game-icons:aerial-signal",
	});
}

export default Component;
