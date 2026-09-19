import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg3spjb2x.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg3spjb2x"/>`,
		"fallback": "fa6-solid:file-half-dashed",
	});
}

export default Component;
