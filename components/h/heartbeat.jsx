import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-_fu0bnp.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-_fu0bnp"/>`,
		"fallback": "fa:heartbeat",
	});
}

export default Component;
