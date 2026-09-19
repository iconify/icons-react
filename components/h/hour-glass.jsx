import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-n0b1j-f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-n0b1j-f"/>`,
		"fallback": "entypo:hour-glass",
	});
}

export default Component;
