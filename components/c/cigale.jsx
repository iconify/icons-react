import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0nzpri2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0nzpri2l"/>`,
		"fallback": "game-icons:cigale",
	});
}

export default Component;
