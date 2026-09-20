import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thl3od9jp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="thl3od9jp"/>`,
		"fallback": "streamline-plump:convert-pdf-1-remix",
	});
}

export default Component;
