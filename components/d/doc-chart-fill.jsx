import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrp5dfmsr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrp5dfmsr"/>`,
		"fallback": "f7:doc-chart-fill",
	});
}

export default Component;
