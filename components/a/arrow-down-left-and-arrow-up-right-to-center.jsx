import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shwf02r4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="shwf02r4q"/>`,
		"fallback": "prime:arrow-down-left-and-arrow-up-right-to-center",
	});
}

export default Component;
