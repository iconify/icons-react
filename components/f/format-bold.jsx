import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al76bac_q.css';

const viewBox = {"width":232,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al76bac_q"/>`,
		"fallback": "zmdi:format-bold",
	});
}

export default Component;
