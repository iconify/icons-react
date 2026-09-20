import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0j17oawz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0j17oawz"/>`,
		"fallback": "prime:arrow-right-arrow-left",
	});
}

export default Component;
