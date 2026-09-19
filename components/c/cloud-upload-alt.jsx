import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1gxb0-uk.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1gxb0-uk"/>`,
		"fallback": "fa-solid:cloud-upload-alt",
	});
}

export default Component;
