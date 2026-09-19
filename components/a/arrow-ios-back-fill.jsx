import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm9d3vb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm9d3vb1a"/>`,
		"fallback": "eva:arrow-ios-back-fill",
	});
}

export default Component;
