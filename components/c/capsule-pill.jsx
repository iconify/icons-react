import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvokzab5j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvokzab5j"/>`,
		"fallback": "bi:capsule-pill",
	});
}

export default Component;
