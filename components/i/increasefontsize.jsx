import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6mdaccda.css';
import '../../css/m/m79b16c6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6mdaccda"/><path class="m79b16c6o"/>`,
		"fallback": "fxemoji:increasefontsize",
	});
}

export default Component;
