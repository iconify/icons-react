import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fwyiitvir.css';
import '../../css/q/qp6qqkr1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="fwyiitvir"/><path class="qp6qqkr1k"/></g>`,
		"fallback": "streamline-logos:food-spotting-logo-2",
	});
}

export default Component;
