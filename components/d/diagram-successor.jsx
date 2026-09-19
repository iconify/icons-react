import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsez2mbsp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsez2mbsp"/>`,
		"fallback": "fa7-solid:diagram-successor",
	});
}

export default Component;
