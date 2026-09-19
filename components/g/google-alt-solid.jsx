import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyr2sybkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyr2sybkw"/>`,
		"fallback": "basil:google-alt-solid",
	});
}

export default Component;
