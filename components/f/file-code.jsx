import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_nv8mbqi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_nv8mbqi"/>`,
		"fallback": "la:file-code",
	});
}

export default Component;
