import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xldk15bbn.css';
import '../../css/u/uee4y3m1v.css';
import '../../css/e/esmj5zbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xldk15bbn"/><path class="uee4y3m1v"/><path class="esmj5zbwh"/>`,
		"fallback": "solar:chat-round-line-bold-duotone",
	});
}

export default Component;
