import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke5xj4b2r.css';
import '../../css/u/u4w6z7bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke5xj4b2r"/><path class="u4w6z7bmg"/>`,
		"fallback": "token:ccv2",
	});
}

export default Component;
