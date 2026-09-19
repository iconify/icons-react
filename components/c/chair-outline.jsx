import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wuni6dv1j.css';
import '../../css/f/fa5gfobyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="wuni6dv1j"/><path class="fa5gfobyg"/></g>`,
		"fallback": "bitcoin-icons:chair-outline",
	});
}

export default Component;
