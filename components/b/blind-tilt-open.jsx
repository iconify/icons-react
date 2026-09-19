import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id6amw2pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id6amw2pa"/>`,
		"fallback": "cbi:blind-tilt-open",
	});
}

export default Component;
