import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo6mqobnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo6mqobnt"/>`,
		"fallback": "thesvg-color:flux",
	});
}

export default Component;
