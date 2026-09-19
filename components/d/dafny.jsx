import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfdk9o7_e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfdk9o7_e"/>`,
		"fallback": "file-icons:dafny",
	});
}

export default Component;
