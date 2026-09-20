import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivylbb__r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivylbb__r"/>`,
		"fallback": "mdi:image-filter-center-focus",
	});
}

export default Component;
