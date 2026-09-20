import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmf2d63wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmf2d63wb"/>`,
		"fallback": "simple-icons:imdb",
	});
}

export default Component;
