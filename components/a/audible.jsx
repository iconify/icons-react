import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwz12tbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwz12tbdi"/>`,
		"fallback": "thesvg:audible",
	});
}

export default Component;
