import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvqwzbcbx.css';

const viewBox = {"width":717,"height":669};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvqwzbcbx"/>`,
		"fallback": "ls:game",
	});
}

export default Component;
