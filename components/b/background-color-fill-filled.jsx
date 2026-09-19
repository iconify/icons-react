import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jor-usn7v.css';
import '../../css/f/fj747pbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b jor-usn7v"/><rect class="b fj747pbln"/>`,
		"fallback": "boxicons:background-color-fill-filled",
	});
}

export default Component;
