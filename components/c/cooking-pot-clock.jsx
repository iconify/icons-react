import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us7y2n5ix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us7y2n5ix"/>`,
		"fallback": "noviair-light:cooking-pot-clock",
	});
}

export default Component;
