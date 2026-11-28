import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg96uj61p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg96uj61p"/>`,
		"fallback": "iconaut:circle-number-1-solid",
	});
}

export default Component;
