import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwke2fiie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwke2fiie"/>`,
		"fallback": "cbi:aqara-fp2",
	});
}

export default Component;
