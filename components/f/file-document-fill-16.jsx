import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enk2i125f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enk2i125f"/>`,
		"fallback": "garden:file-document-fill-16",
	});
}

export default Component;
