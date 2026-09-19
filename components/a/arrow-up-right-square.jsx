import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-7l-4pxq.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-7l-4pxq"/><path class="jor-usn7v"/>`,
		"fallback": "boxicons:arrow-up-right-square",
	});
}

export default Component;
