import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0qfjrb2i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0qfjrb2i"/>`,
		"fallback": "dashicons:editor-alignleft",
	});
}

export default Component;
