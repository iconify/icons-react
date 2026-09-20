import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oje5wac4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oje5wac4c"/>`,
		"fallback": "ri:file-search-fill",
	});
}

export default Component;
