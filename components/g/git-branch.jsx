import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-22434qz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-22434qz"/>`,
		"fallback": "keyline-icons:git-branch",
	});
}

export default Component;
