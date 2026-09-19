import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7e247bcz.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7e247bcz"/><path class="jor-usn7v"/>`,
		"fallback": "boxicons:alert-square",
	});
}

export default Component;
