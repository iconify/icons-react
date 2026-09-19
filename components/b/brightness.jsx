import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcc25bptl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcc25bptl"/>`,
		"fallback": "bxs:brightness",
	});
}

export default Component;
