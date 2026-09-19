import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/on3qdybdj.css';
import '../../css/t/tkqektbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="on3qdybdj"/><path class="tkqektbdo"/></g>`,
		"fallback": "iconamoon:file-video-light",
	});
}

export default Component;
