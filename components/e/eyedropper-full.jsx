import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq79_r4_x.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq79_r4_x"/>`,
		"fallback": "f7:eyedropper-full",
	});
}

export default Component;
