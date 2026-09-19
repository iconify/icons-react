import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_ch57g7n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_ch57g7n"/>`,
		"fallback": "whh:insertpiechart",
	});
}

export default Component;
