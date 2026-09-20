import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bls7y0bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bls7y0bef"/>`,
		"fallback": "mynaui:cookie",
	});
}

export default Component;
