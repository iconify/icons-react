import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nijwh4svl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nijwh4svl"/>`,
		"fallback": "withicons:avatar-koala-gloss",
	});
}

export default Component;
