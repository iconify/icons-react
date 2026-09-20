import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl-k__l2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl-k__l2z"/>`,
		"fallback": "thesvg:inflection",
	});
}

export default Component;
