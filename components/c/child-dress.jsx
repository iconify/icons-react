import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v96kr2bdr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v96kr2bdr"/>`,
		"fallback": "fa7-solid:child-dress",
	});
}

export default Component;
