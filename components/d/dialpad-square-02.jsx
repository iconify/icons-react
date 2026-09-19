import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyy9geb-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyy9geb-v"/>`,
		"fallback": "hugeicons:dialpad-square-02",
	});
}

export default Component;
