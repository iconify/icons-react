import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwfpi0bph.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwfpi0bph"/>`,
		"fallback": "fa-regular:file-audio",
	});
}

export default Component;
