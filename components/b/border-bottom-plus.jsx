import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epzhw5wxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epzhw5wxp"/>`,
		"fallback": "tabler:border-bottom-plus",
	});
}

export default Component;
