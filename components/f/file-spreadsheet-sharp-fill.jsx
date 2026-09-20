import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nseund19v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nseund19v"/>`,
		"fallback": "keyline-icons:file-spreadsheet-sharp-fill",
	});
}

export default Component;
