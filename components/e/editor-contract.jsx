import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwdebdc6m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwdebdc6m"/>`,
		"fallback": "dashicons:editor-contract",
	});
}

export default Component;
