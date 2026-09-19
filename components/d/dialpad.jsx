import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkrbc7bis.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkrbc7bis"/>`,
		"fallback": "cil:dialpad",
	});
}

export default Component;
