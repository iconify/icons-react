import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evf7b38_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evf7b38_a"/>`,
		"fallback": "fe:arrow-right",
	});
}

export default Component;
