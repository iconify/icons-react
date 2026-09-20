import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfk2zh8ck.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jfk2zh8ck"/>`,
		"fallback": "ix:app-document-filled",
	});
}

export default Component;
