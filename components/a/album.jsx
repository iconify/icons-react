import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/a65jy6b-i.css';
import '../../css/u/u_66ieb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><rect class="a65jy6b-i"/><path class="u_66ieb2j"/></g>`,
		"fallback": "proicons:album",
	});
}

export default Component;
