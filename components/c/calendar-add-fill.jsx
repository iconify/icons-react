import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mal-cabtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mal-cabtd"/>`,
		"fallback": "iconamoon:calendar-add-fill",
	});
}

export default Component;
