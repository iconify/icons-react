import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaxhd4e-w.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaxhd4e-w"/>`,
		"fallback": "fa6-solid:file-word",
	});
}

export default Component;
