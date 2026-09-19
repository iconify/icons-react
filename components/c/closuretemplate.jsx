import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9l-ttbfy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9l-ttbfy"/>`,
		"fallback": "file-icons:closuretemplate",
	});
}

export default Component;
