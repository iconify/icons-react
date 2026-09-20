import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhwe4xbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhwe4xbvu"/>`,
		"fallback": "uil:file-plus",
	});
}

export default Component;
