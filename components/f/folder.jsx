import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6b9ptbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6b9ptbcr"/>`,
		"fallback": "bxs:folder",
	});
}

export default Component;
