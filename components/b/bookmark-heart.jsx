import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmi3aw10y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmi3aw10y"/>`,
		"fallback": "tabler:bookmark-heart",
	});
}

export default Component;
