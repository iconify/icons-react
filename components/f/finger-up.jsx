import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_mg4gbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_mg4gbeq"/>`,
		"fallback": "boxicons:finger-up",
	});
}

export default Component;
