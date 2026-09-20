import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1wzko7mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1wzko7mp"/>`,
		"fallback": "ri:hotel-bed-fill",
	});
}

export default Component;
