import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4kiitbpp.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o4kiitbpp"/><path class="wm3j448rr"/>`,
		"fallback": "solar:file-chart-2-bold",
	});
}

export default Component;
