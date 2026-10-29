import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pydbwxl_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pydbwxl_y"/>`,
		"fallback": "vadivam:file-plus-corner",
	});
}

export default Component;
