import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io8fdue6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io8fdue6p"/>`,
		"fallback": "ri:customer-service-fill",
	});
}

export default Component;
