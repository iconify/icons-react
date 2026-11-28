import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh4qecb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary uh4qecb-b"/>`,
		"fallback": "iconaut:corner-inverted-duotone",
	});
}

export default Component;
