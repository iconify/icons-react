import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox7ar-sbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox7ar-sbm"/>`,
		"fallback": "simple-icons:elavon",
	});
}

export default Component;
