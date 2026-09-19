import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lona2hrqc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lona2hrqc"/>`,
		"fallback": "dashicons:format-aside",
	});
}

export default Component;
