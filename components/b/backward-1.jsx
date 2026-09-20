import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjy7yupxa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjy7yupxa"/>`,
		"fallback": "subway:backward-1",
	});
}

export default Component;
