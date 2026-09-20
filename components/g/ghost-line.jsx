import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e85dptbxk.css';
import '../../css/y/yijn-abxr.css';
import '../../css/m/milycbc-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e85dptbxk"/><path class="yijn-abxr"/><path class="milycbc-s"/>`,
		"fallback": "mingcute:ghost-line",
	});
}

export default Component;
