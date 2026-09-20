import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwe1oubqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwe1oubqn"/>`,
		"fallback": "simple-icons:codestream",
	});
}

export default Component;
