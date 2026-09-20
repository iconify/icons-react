import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybz7xp5wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybz7xp5wk"/>`,
		"fallback": "thesvg-color:cobalt",
	});
}

export default Component;
