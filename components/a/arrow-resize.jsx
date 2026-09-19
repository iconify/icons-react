import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utly6nbpe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utly6nbpe"/>`,
		"fallback": "ion:arrow-resize",
	});
}

export default Component;
