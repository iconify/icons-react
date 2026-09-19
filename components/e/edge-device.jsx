import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czq8nj3ot.css';
import '../../css/t/t-nlx2bxo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czq8nj3ot"/><path class="t-nlx2bxo"/>`,
		"fallback": "carbon:edge-device",
	});
}

export default Component;
