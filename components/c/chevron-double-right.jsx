import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of9-g8y0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of9-g8y0j"/>`,
		"fallback": "heroicons-outline:chevron-double-right",
	});
}

export default Component;
