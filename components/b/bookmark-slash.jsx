import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssl67mbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssl67mbxu"/>`,
		"fallback": "heroicons:bookmark-slash",
	});
}

export default Component;
