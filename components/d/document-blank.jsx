import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e00g5nbxw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e00g5nbxw"/>`,
		"fallback": "carbon:document-blank",
	});
}

export default Component;
