import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1ecxxb0z.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1ecxxb0z"/><path class="jor-usn7v"/>`,
		"fallback": "boxicons:arrow-down-left-square",
	});
}

export default Component;
