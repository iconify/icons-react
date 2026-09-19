import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojnmpz68t.css';
import '../../css/j/jsoljj9wy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojnmpz68t"/><path class="jsoljj9wy"/>`,
		"fallback": "boxicons:guitar-amp",
	});
}

export default Component;
