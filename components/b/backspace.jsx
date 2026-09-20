import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdt_h3a4x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdt_h3a4x"/>`,
		"fallback": "zondicons:backspace",
	});
}

export default Component;
