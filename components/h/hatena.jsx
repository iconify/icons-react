import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd7rvbbsg.css';

const viewBox = {"width":819,"height":681};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd7rvbbsg"/>`,
		"fallback": "ls:hatena",
	});
}

export default Component;
