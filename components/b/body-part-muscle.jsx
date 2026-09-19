import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pypq1db_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pypq1db_q"/>`,
		"fallback": "hugeicons:body-part-muscle",
	});
}

export default Component;
