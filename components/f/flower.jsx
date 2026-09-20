import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b057pcbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b057pcbls"/>`,
		"fallback": "thesvg-color:flower",
	});
}

export default Component;
