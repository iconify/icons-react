import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljky9acbm.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljky9acbm"/>`,
		"fallback": "el:friendfeed",
	});
}

export default Component;
