import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgl5e3brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgl5e3brr"/>`,
		"fallback": "thesvg:codeproject",
	});
}

export default Component;
