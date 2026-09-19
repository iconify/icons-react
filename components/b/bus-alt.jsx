import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/por8_p__f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="por8_p__f"/>`,
		"fallback": "cil:bus-alt",
	});
}

export default Component;
