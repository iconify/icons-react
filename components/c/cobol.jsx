import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtl2wew-b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtl2wew-b"/>`,
		"fallback": "file-icons:cobol",
	});
}

export default Component;
