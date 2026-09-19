import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suh-k03fs.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suh-k03fs"/>`,
		"fallback": "garden:file-document-fill-12",
	});
}

export default Component;
