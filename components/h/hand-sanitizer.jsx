import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj-m25pot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj-m25pot"/>`,
		"fallback": "mdi:hand-sanitizer",
	});
}

export default Component;
