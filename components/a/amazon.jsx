import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a326w2bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a326w2bhr"/>`,
		"fallback": "mdi:amazon",
	});
}

export default Component;
