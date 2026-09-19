import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmto9yz5j.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmto9yz5j"/>`,
		"fallback": "fa6-solid:arrows-to-circle",
	});
}

export default Component;
