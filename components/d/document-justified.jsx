import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_a5gssuo.css';
import '../../css/j/jtowsomii.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGVatqZbTj" class="g_a5gssuo"/></defs><g class="jtowsomii"><use href="#SVGVatqZbTj"/><use href="#SVGVatqZbTj"/></g>`,
		"fallback": "system-uicons:document-justified",
	});
}

export default Component;
