import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li0lmsb3e.css';
import '../../css/j/jnl6f4blr.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li0lmsb3e"/><path class="jnl6f4blr"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:chemical-plant-20",
	});
}

export default Component;
