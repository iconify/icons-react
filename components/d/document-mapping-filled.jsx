import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4kxk4k1z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y4kxk4k1z"/>`,
		"fallback": "ix:document-mapping-filled",
	});
}

export default Component;
