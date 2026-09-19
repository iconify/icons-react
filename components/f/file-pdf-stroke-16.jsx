import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1kw-cc7c.css';
import '../../css/o/odgrbee8c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1kw-cc7c"/><rect class="odgrbee8c"/>`,
		"fallback": "garden:file-pdf-stroke-16",
	});
}

export default Component;
