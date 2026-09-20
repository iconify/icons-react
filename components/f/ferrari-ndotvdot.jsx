import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smvh7b4ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smvh7b4ou"/>`,
		"fallback": "thesvg-color:ferrari-ndotvdot",
	});
}

export default Component;
