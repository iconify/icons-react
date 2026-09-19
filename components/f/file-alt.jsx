import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjp3leb4u.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjp3leb4u"/>`,
		"fallback": "fa-regular:file-alt",
	});
}

export default Component;
