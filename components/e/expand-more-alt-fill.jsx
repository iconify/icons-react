import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwyk2y6_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uwyk2y6_m"/>`,
		"fallback": "si:expand-more-alt-fill",
	});
}

export default Component;
