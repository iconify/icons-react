import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/b-r8pffbr.css';
import '../../css/i/iina63bcq.css';
import '../../css/c/c9w1ambxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="b-r8pffbr"/><path class="iina63bcq"/><path class="c9w1ambxc"/></g>`,
		"fallback": "lets-icons:compass-north-light",
	});
}

export default Component;
