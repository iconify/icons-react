import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnb5ity-x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnb5ity-x"/>`,
		"fallback": "dashicons:desktop",
	});
}

export default Component;
