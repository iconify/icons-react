import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujkwl2b4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujkwl2b4g"/>`,
		"fallback": "mdi:database-clock",
	});
}

export default Component;
