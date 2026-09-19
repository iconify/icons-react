import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay4kt0lor.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay4kt0lor"/>`,
		"fallback": "zmdi:format-rtl",
	});
}

export default Component;
