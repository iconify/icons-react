import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fisiwnj1i.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fisiwnj1i"/>`,
		"fallback": "dinkie-icons:girl-filled",
	});
}

export default Component;
