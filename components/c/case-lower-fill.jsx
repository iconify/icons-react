import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcas9bc8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcas9bc8t"/>`,
		"fallback": "mingcute:case-lower-fill",
	});
}

export default Component;
