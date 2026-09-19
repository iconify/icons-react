import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze24i7f5v.css';

const viewBox = {"width":442,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze24i7f5v"/>`,
		"fallback": "file-icons:faust",
	});
}

export default Component;
