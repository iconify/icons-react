import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfry1kbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfry1kbcq"/>`,
		"fallback": "noviair-light:garage-check",
	});
}

export default Component;
