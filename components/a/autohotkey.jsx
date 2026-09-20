import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dimodfu-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dimodfu-c"/>`,
		"fallback": "thesvg-color:autohotkey",
	});
}

export default Component;
