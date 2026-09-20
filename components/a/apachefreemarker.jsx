import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxv3ztb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxv3ztb8i"/>`,
		"fallback": "simple-icons:apachefreemarker",
	});
}

export default Component;
