import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm-to-bdf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm-to-bdf"/>`,
		"fallback": "f7:arrow-right-arrow-left-circle-fill",
	});
}

export default Component;
