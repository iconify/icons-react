import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-5ub-bof.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-5ub-bof"/>`,
		"fallback": "dinkie-icons:envelope-filled",
	});
}

export default Component;
