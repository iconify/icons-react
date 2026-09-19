import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1w0_pbtg.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1w0_pbtg"/>`,
		"fallback": "fa:cube",
	});
}

export default Component;
