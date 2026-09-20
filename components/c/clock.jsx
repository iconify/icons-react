import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nre_rzf9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nre_rzf9v"/>`,
		"fallback": "mi:clock",
	});
}

export default Component;
