import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnxrwxbfk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnxrwxbfk"/>`,
		"fallback": "devicon-plain:ember",
	});
}

export default Component;
