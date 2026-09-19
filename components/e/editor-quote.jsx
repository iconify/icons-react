import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtwzdjb0q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtwzdjb0q"/>`,
		"fallback": "dashicons:editor-quote",
	});
}

export default Component;
