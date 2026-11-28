import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8ro90bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8ro90bwq primary"/>`,
		"fallback": "iconaut:fold-vertical-duotone",
	});
}

export default Component;
