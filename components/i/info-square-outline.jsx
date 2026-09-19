import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf7f2ebgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf7f2ebgg"/>`,
		"fallback": "ci:info-square-outline",
	});
}

export default Component;
