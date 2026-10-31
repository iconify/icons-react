import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmg9ivb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmg9ivb1v"/>`,
		"fallback": "coolicons:banknote-fill-round",
	});
}

export default Component;
