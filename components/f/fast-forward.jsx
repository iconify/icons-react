import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hota12b4i.css';

const viewBox = {"width":376,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hota12b4i"/>`,
		"fallback": "zmdi:fast-forward",
	});
}

export default Component;
