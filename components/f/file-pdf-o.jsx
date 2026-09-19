import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4z-3_leu.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4z-3_leu"/>`,
		"fallback": "fa:file-pdf-o",
	});
}

export default Component;
