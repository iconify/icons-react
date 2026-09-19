import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fazxnob7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fazxnob7y"/>`,
		"fallback": "game-icons:hand-wing",
	});
}

export default Component;
