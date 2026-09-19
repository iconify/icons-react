import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1rre3sqz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1rre3sqz"/>`,
		"fallback": "fa7-solid:glasses",
	});
}

export default Component;
