import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsobjn6zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsobjn6zc"/>`,
		"fallback": "mdi:clipboard-arrow-up",
	});
}

export default Component;
