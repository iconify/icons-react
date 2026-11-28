import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zer3j2bpd.css';
import '../../css/h/hmvyidiwu.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zer3j2bpd"/><path class="hmvyidiwu"/></g>`,
		"fallback": "pullo:folder-check-duotone",
	});
}

export default Component;
