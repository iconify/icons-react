import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/arhb1ubmx.css';
import '../../css/n/n31e0bb5t.css';
import '../../css/y/y14oxgb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="arhb1ubmx"/><path class="n31e0bb5t"/><path class="y14oxgb-i"/></g>`,
		"fallback": "matita:file-exclamation-point",
	});
}

export default Component;
