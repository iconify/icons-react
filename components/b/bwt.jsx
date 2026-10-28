import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo4n4ebjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo4n4ebjt"/>`,
		"fallback": "cbi:bwt",
	});
}

export default Component;
