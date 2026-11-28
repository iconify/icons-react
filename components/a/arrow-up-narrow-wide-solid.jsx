import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofkb0xw0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofkb0xw0l"/>`,
		"fallback": "iconaut:arrow-up-narrow-wide-solid",
	});
}

export default Component;
