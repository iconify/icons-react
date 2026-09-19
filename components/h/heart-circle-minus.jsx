import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8h25poui.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8h25poui"/>`,
		"fallback": "fa7-solid:heart-circle-minus",
	});
}

export default Component;
