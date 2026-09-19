import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyv4_tbpa.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyv4_tbpa"/>`,
		"fallback": "devicon-plain:hugo",
	});
}

export default Component;
