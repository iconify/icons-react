import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1nt6tnct.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o1nt6tnct"/>`,
		"fallback": "ix:communication-filled",
	});
}

export default Component;
