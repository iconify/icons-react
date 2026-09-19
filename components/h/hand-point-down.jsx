import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edumjhbrx.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edumjhbrx"/>`,
		"fallback": "fa6-regular:hand-point-down",
	});
}

export default Component;
