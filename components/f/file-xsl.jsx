import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af-2b-5_k.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af-2b-5_k"/>`,
		"fallback": "iwwa:file-xsl",
	});
}

export default Component;
