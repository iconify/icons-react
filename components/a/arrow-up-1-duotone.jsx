import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spo4n5inz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spo4n5inz"/>`,
		"fallback": "iconamoon:arrow-up-1-duotone",
	});
}

export default Component;
