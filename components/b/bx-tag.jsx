import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byxxf7blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byxxf7blc"/>`,
		"fallback": "bx:bx-tag",
	});
}

export default Component;
