import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw0vjab0d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bw0vjab0d"/>`,
		"fallback": "ix:document-code-filled",
	});
}

export default Component;
