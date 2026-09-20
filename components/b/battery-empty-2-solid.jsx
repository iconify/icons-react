import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy380gv4v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oy380gv4v"/>`,
		"fallback": "streamline:battery-empty-2-solid",
	});
}

export default Component;
