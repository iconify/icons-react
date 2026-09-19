import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4tcctboo.css';

const viewBox = {"width":20,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4tcctboo"/>`,
		"fallback": "garden:file-document-26",
	});
}

export default Component;
