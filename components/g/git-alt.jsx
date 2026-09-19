import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxiw_rb4a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxiw_rb4a"/>`,
		"fallback": "fa7-brands:git-alt",
	});
}

export default Component;
