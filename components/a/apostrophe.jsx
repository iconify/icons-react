import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmmfto65l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmmfto65l"/>`,
		"fallback": "thesvg:apostrophe",
	});
}

export default Component;
