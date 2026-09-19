import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-4j6sb_c.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-4j6sb_c"/>`,
		"fallback": "fa6-solid:file-circle-exclamation",
	});
}

export default Component;
