import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcu-63jaj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcu-63jaj"/>`,
		"fallback": "ix:edit-document-filled",
	});
}

export default Component;
