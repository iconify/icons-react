import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cntpq-7ws.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cntpq-7ws"/>`,
		"fallback": "file-icons:adobe-premiererush",
	});
}

export default Component;
