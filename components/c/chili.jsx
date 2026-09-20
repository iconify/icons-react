import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgotcl4sh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgotcl4sh"/>`,
		"fallback": "picon:chili",
	});
}

export default Component;
