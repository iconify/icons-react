import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpt0mldnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpt0mldnk"/>`,
		"fallback": "noviair-light:folder-search",
	});
}

export default Component;
