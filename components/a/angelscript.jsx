import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixwq2bc2d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixwq2bc2d"/>`,
		"fallback": "file-icons:angelscript",
	});
}

export default Component;
