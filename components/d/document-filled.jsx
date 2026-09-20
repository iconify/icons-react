import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj264cgmc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vj264cgmc"/>`,
		"fallback": "ix:document-filled",
	});
}

export default Component;
