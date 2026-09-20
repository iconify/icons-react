import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gav38t2og.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gav38t2og"/>`,
		"fallback": "ri:folder-warning-line",
	});
}

export default Component;
