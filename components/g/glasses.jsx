import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txvu32bct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txvu32bct"/>`,
		"fallback": "noviair:glasses",
	});
}

export default Component;
