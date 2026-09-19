import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we9h4vbum.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we9h4vbum"/>`,
		"fallback": "dinkie-icons:bezier",
	});
}

export default Component;
