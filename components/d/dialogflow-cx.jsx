import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqipk5huk.css';
import '../../css/w/wh59mdnkx.css';
import '../../css/x/xq7fcdc_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yqipk5huk"/><path class="wh59mdnkx"/><path class="xq7fcdc_j"/></g>`,
		"fallback": "gcp:dialogflow-cx",
	});
}

export default Component;
