import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpl-z2bob.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpl-z2bob"/>`,
		"fallback": "lineicons:beat",
	});
}

export default Component;
