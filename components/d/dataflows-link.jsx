import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bttfc0bst.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bttfc0bst"/>`,
		"fallback": "fluent-mdl2:dataflows-link",
	});
}

export default Component;
