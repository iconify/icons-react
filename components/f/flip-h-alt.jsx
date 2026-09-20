import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8-ajz3mr.css';
import '../../css/c/cw9ts4b7s.css';
import '../../css/l/lv8kz-w7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8-ajz3mr"/><path class="cw9ts4b7s"/><path class="lv8kz-w7x"/>`,
		"fallback": "uim:flip-h-alt",
	});
}

export default Component;
