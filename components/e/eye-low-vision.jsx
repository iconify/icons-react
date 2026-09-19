import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrnc01brg.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrnc01brg"/>`,
		"fallback": "fa6-solid:eye-low-vision",
	});
}

export default Component;
