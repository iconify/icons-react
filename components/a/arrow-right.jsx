import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptjd14b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptjd14b6s"/>`,
		"fallback": "tabler:arrow-right",
	});
}

export default Component;
