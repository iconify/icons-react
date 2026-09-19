import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhktsy7zu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhktsy7zu"/>`,
		"fallback": "fa7-solid:fire-extinguisher",
	});
}

export default Component;
