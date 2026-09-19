import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh6x2fi-r.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh6x2fi-r"/><path class="jor-usn7v"/>`,
		"fallback": "boxicons:arrow-up-stroke-square",
	});
}

export default Component;
