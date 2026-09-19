import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jor-usn7v.css';
import '../../css/x/x1q6z__kk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jor-usn7v"/><path class="x1q6z__kk"/>`,
		"fallback": "boxicons:area",
	});
}

export default Component;
