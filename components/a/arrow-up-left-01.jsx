import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpr5uwbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpr5uwbmo"/>`,
		"fallback": "hugeicons:arrow-up-left-01",
	});
}

export default Component;
