import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra9atrb7g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra9atrb7g"/>`,
		"fallback": "bi:filetype-bmp",
	});
}

export default Component;
