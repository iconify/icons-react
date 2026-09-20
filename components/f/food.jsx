import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng4ff_p6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng4ff_p6o"/>`,
		"fallback": "proicons:food",
	});
}

export default Component;
