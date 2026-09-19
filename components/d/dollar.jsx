import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsfelxb-s.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsfelxb-s"/>`,
		"fallback": "foundation:dollar",
	});
}

export default Component;
