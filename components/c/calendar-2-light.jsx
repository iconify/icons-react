import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwvcop_jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwvcop_jb"/>`,
		"fallback": "iconamoon:calendar-2-light",
	});
}

export default Component;
