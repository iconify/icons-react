import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm5lx6bph.css';

const viewBox = {"width":388,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm5lx6bph"/>`,
		"fallback": "file-icons:fbx",
	});
}

export default Component;
