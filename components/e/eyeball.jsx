import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4g2bi8-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4g2bi8-m"/>`,
		"fallback": "game-icons:eyeball",
	});
}

export default Component;
