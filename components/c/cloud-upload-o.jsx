import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs3uvlr_p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs3uvlr_p"/>`,
		"fallback": "uiw:cloud-upload-o",
	});
}

export default Component;
