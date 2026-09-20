import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz-_5oksg.css';
import '../../css/s/snpiwsb_l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sz-_5oksg"/><circle class="snpiwsb_l"/>`,
		"fallback": "openmoji:blue-circle",
	});
}

export default Component;
