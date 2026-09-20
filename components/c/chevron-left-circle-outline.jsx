import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exg9pl4_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exg9pl4_y"/>`,
		"fallback": "mdi:chevron-left-circle-outline",
	});
}

export default Component;
