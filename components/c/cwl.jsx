import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac1bsobcb.css';

const viewBox = {"width":150,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac1bsobcb"/>`,
		"fallback": "file-icons:cwl",
	});
}

export default Component;
