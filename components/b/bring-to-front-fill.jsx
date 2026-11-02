import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prrr1qb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prrr1qb-p"/>`,
		"fallback": "mingcute:bring-to-front-fill",
	});
}

export default Component;
