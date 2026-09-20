import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j14of8izp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j14of8izp"/>`,
		"fallback": "pixel:expand-solid",
	});
}

export default Component;
