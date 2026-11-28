import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo7og7_1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo7og7_1p"/>`,
		"fallback": "noviair:bed-clock",
	});
}

export default Component;
