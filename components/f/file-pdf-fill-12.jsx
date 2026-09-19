import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo8v5jbcd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo8v5jbcd"/>`,
		"fallback": "garden:file-pdf-fill-12",
	});
}

export default Component;
