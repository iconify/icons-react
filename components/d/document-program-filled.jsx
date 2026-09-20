import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uilm590_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uilm590_x"/>`,
		"fallback": "ix:document-program-filled",
	});
}

export default Component;
