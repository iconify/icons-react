import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_5pycbka.css';
import '../../css/b/bjttmb9ho.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_5pycbka"/><path class="bjttmb9ho"/>`,
		"fallback": "openmoji:bikini",
	});
}

export default Component;
