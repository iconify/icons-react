import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azvesr3tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azvesr3tm"/>`,
		"fallback": "cbi:honda",
	});
}

export default Component;
