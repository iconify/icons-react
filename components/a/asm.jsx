import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5sa_rb5p.css';
import '../../css/h/hn41-unac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5sa_rb5p"/><path class="hn41-unac"/>`,
		"fallback": "token:asm",
	});
}

export default Component;
