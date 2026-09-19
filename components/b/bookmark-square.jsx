import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk94esn1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk94esn1c"/>`,
		"fallback": "heroicons-outline:bookmark-square",
	});
}

export default Component;
