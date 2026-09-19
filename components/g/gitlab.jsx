import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf-ujzx2w.css';

const viewBox = {"width":1792,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf-ujzx2w"/>`,
		"fallback": "fa:gitlab",
	});
}

export default Component;
