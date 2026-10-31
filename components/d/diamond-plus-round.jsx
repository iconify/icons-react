import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a610v24ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a610v24ve"/>`,
		"fallback": "coolicons:diamond-plus-round",
	});
}

export default Component;
