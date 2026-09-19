import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h26jykb8d.css';

const viewBox = {"width":1113,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h26jykb8d"/>`,
		"fallback": "websymbol:attach",
	});
}

export default Component;
