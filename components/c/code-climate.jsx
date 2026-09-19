import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amd5b9b1t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amd5b9b1t"/>`,
		"fallback": "file-icons:code-climate",
	});
}

export default Component;
