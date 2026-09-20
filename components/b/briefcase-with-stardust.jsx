import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py0s0vbno.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py0s0vbno"/>`,
		"fallback": "pinhead:briefcase-with-stardust",
	});
}

export default Component;
