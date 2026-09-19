import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn1zf-bov.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn1zf-bov"/>`,
		"fallback": "ps:guy-happy",
	});
}

export default Component;
