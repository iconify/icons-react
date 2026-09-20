import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbc2u206l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bbc2u206l"/>`,
		"fallback": "ix:cloud-cancelled-filled",
	});
}

export default Component;
