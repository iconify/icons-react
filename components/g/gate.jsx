import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6tyn2y3f.css';
import '../../css/c/cel95e31f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6tyn2y3f"/><path class="cel95e31f"/>`,
		"fallback": "devicon:gate",
	});
}

export default Component;
