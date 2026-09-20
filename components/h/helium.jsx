import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo7cxv9ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo7cxv9ak"/>`,
		"fallback": "thesvg-color:helium",
	});
}

export default Component;
