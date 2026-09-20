import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoftywl2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoftywl2f"/>`,
		"fallback": "mdi:desktop-tower",
	});
}

export default Component;
