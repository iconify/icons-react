import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vatnj1w-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vatnj1w-c"/>`,
		"fallback": "noviair-light:file-text-clock",
	});
}

export default Component;
