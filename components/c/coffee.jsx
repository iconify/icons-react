import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bocd00ptt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bocd00ptt"/>`,
		"fallback": "cil:coffee",
	});
}

export default Component;
