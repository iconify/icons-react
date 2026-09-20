import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9_jpg2jv.css';
import '../../css/c/c287m3bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9_jpg2jv"/><path clip-rule="evenodd" class="c287m3bab"/>`,
		"fallback": "lets-icons:arhive-duotone",
	});
}

export default Component;
