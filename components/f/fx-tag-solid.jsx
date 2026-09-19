import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx_vtdb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cx_vtdb4r"/>`,
		"fallback": "iconoir:fx-tag-solid",
	});
}

export default Component;
