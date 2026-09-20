import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4prvz4vh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z4prvz4vh"/>`,
		"fallback": "majesticons:arrow-left-circle",
	});
}

export default Component;
