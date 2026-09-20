import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhj0e-blr.css';
import '../../css/e/etqe0ibeg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhj0e-blr"/><path clip-rule="evenodd" class="etqe0ibeg"/>`,
		"fallback": "teenyicons:cup-solid",
	});
}

export default Component;
