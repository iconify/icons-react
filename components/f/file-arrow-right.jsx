import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntus0v-mt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntus0v-mt"/>`,
		"fallback": "noviair:file-arrow-right",
	});
}

export default Component;
