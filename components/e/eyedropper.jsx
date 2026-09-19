import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw3oh1bte.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw3oh1bte"/>`,
		"fallback": "fa:eyedropper",
	});
}

export default Component;
