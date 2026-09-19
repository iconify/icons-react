import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idf2qgbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="idf2qgbhv"/>`,
		"fallback": "iconamoon:arrow-right-2-fill",
	});
}

export default Component;
