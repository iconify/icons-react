import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwzbbk2dk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fwzbbk2dk"/>`,
		"fallback": "heroicons:cog-16-solid",
	});
}

export default Component;
