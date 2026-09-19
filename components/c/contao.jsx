import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0ykc4btd.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0ykc4btd"/>`,
		"fallback": "fa:contao",
	});
}

export default Component;
