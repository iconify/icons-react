import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/ho-up6bse.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ho-up6bse"/><polyline points="8.25 13.25 14.25 13.25 14.25 4.75 8.25 4.75 6.75 2.75 1.75 2.75 1.75 6.75"/></g>`,
		"fallback": "charm:folder-symlink",
	});
}

export default Component;
