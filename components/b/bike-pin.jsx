import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvw-znb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvw-znb9y"/>`,
		"fallback": "tabler:bike-pin",
	});
}

export default Component;
