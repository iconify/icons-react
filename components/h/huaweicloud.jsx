import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdl-8cxhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdl-8cxhz"/>`,
		"fallback": "thesvg:huaweicloud",
	});
}

export default Component;
