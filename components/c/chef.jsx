import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgo0mxbyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgo0mxbyn"/>`,
		"fallback": "thesvg:chef",
	});
}

export default Component;
