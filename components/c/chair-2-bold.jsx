import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srcqntbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srcqntbzd"/>`,
		"fallback": "solar:chair-2-bold",
	});
}

export default Component;
