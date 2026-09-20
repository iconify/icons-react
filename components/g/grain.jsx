import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wegkc6b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wegkc6b2o"/>`,
		"fallback": "mdi:grain",
	});
}

export default Component;
