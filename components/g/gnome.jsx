import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5-l4ub-b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5-l4ub-b"/>`,
		"fallback": "devicon:gnome",
	});
}

export default Component;
