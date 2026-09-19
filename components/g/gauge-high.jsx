import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta5qzxb6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta5qzxb6b"/>`,
		"fallback": "fa6-solid:gauge-high",
	});
}

export default Component;
