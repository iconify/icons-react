import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h26p794_s.css';

const viewBox = {"width":487,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h26p794_s"/>`,
		"fallback": "file-icons:husky",
	});
}

export default Component;
