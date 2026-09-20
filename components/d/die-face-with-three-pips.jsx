import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffx328bzc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffx328bzc"/>`,
		"fallback": "pinhead:die-face-with-three-pips",
	});
}

export default Component;
