import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4280i6sa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4280i6sa"/>`,
		"fallback": "ri:discuss-line",
	});
}

export default Component;
