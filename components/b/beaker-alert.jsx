import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lau6u465k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lau6u465k"/>`,
		"fallback": "noviair-light:beaker-alert",
	});
}

export default Component;
