import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg44mlb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg44mlb9t"/>`,
		"fallback": "circum:coffee-bean",
	});
}

export default Component;
