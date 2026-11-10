import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iliuq1b8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iliuq1b8y"/>`,
		"fallback": "tabler:filter-2-key",
	});
}

export default Component;
