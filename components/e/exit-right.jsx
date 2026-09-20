import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1sz4ix2t.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1sz4ix2t"/>`,
		"fallback": "system-uicons:exit-right",
	});
}

export default Component;
