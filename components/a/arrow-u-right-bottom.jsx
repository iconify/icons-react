import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc316fo5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc316fo5p"/>`,
		"fallback": "mdi:arrow-u-right-bottom",
	});
}

export default Component;
