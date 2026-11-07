import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjgv7_b4e.css';
import '../../css/f/f4kwoxb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjgv7_b4e"/><path class="f4kwoxb6o"/>`,
		"fallback": "solar:folder-output-outline",
	});
}

export default Component;
