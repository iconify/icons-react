import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iouf7kbta.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iouf7kbta"/>`,
		"fallback": "fa6-solid:glasses",
	});
}

export default Component;
