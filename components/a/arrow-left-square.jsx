import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to64u9f4k.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to64u9f4k"/><path class="jor-usn7v"/>`,
		"fallback": "boxicons:arrow-left-square",
	});
}

export default Component;
