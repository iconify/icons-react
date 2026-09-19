import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8crtdbio.css';
import '../../css/d/db_wb5zvu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="z8crtdbio"/><path class="db_wb5zvu"/></g>`,
		"fallback": "cryptocurrency-color:actn",
	});
}

export default Component;
