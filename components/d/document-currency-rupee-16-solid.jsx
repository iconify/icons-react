import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra5il3oze.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ra5il3oze"/>`,
		"fallback": "heroicons:document-currency-rupee-16-solid",
	});
}

export default Component;
