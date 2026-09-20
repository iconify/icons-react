import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dchu4ubbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dchu4ubbs"/>`,
		"fallback": "simple-icons:bentley",
	});
}

export default Component;
