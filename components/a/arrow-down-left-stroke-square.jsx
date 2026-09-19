import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt-v-qbvx.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt-v-qbvx"/><path class="jor-usn7v"/>`,
		"fallback": "boxicons:arrow-down-left-stroke-square",
	});
}

export default Component;
