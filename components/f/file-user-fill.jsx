import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixc1-fb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixc1-fb8a"/>`,
		"fallback": "ri:file-user-fill",
	});
}

export default Component;
