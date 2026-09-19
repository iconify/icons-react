import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9kqm51ck.css';

const viewBox = {"width":488,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9kqm51ck"/>`,
		"fallback": "zmdi:brightness-low",
	});
}

export default Component;
