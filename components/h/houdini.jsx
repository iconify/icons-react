import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw7dlv7vt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw7dlv7vt"/>`,
		"fallback": "thesvg-color:houdini",
	});
}

export default Component;
