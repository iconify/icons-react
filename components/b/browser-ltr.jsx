import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a420hzb7o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a420hzb7o"/>`,
		"fallback": "ooui:browser-ltr",
	});
}

export default Component;
