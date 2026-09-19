import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcjtwm8py.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcjtwm8py"/>`,
		"fallback": "fa6-solid:filter",
	});
}

export default Component;
