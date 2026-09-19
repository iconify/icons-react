import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owm_lybuk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owm_lybuk"/>`,
		"fallback": "game-icons:abstract-028",
	});
}

export default Component;
