import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnz56sb2z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnz56sb2z"/>`,
		"fallback": "ion:cloud-upload-sharp",
	});
}

export default Component;
