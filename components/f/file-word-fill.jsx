import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/org_560qh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="org_560qh"/>`,
		"fallback": "ri:file-word-fill",
	});
}

export default Component;
