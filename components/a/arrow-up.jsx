import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqt48ib6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqt48ib6k"/>`,
		"fallback": "humbleicons:arrow-up",
	});
}

export default Component;
