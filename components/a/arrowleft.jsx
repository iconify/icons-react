import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z86gewc1x.css';

const viewBox = {"width":690,"height":719};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z86gewc1x"/>`,
		"fallback": "ls:arrowleft",
	});
}

export default Component;
