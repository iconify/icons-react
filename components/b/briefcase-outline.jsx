import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr399-bdh.css';
import '../../css/i/in-984b7z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="zr399-bdh"/><path class="in-984b7z"/>`,
		"fallback": "famicons:briefcase-outline",
	});
}

export default Component;
