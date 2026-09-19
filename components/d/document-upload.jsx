import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo4vm5lrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo4vm5lrz"/>`,
		"fallback": "grommet-icons:document-upload",
	});
}

export default Component;
