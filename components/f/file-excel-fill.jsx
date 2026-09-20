import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylt94hh4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylt94hh4i"/>`,
		"fallback": "ri:file-excel-fill",
	});
}

export default Component;
