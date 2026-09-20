import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piz8b0-cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piz8b0-cl"/>`,
		"fallback": "mdi:cup-water",
	});
}

export default Component;
