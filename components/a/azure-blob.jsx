import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avsmaub8q.css';

const viewBox = {"width":41.754,"height":48.143};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avsmaub8q"/>`,
		"fallback": "thesvg-color:azure-blob",
	});
}

export default Component;
