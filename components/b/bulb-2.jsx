import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4qvaultt.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4qvaultt"/>`,
		"fallback": "lineicons:bulb-2",
	});
}

export default Component;
