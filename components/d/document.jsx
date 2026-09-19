import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0odedbyc.css';
import '../../css/f/ffal_wb_v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0odedbyc"/><path class="ffal_wb_v"/>`,
		"fallback": "carbon:document",
	});
}

export default Component;
