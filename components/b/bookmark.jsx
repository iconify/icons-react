import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc67n3bas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc67n3bas"/>`,
		"fallback": "uis:bookmark",
	});
}

export default Component;
