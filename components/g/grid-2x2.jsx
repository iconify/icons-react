import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiavo5szk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiavo5szk"/>`,
		"fallback": "keyline-icons:grid-2x2",
	});
}

export default Component;
