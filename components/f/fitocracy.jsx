import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tstc3xbjp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tstc3xbjp"/>`,
		"fallback": "raphael:fitocracy",
	});
}

export default Component;
