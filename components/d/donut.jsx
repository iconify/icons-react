import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqz1thb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cqz1thb_j"/>`,
		"fallback": "reicon:donut",
	});
}

export default Component;
