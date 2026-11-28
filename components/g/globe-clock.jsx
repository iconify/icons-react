import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km9rw_16t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km9rw_16t"/>`,
		"fallback": "noviair-light:globe-clock",
	});
}

export default Component;
