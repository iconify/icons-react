import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwug8ib1k.css';
import '../../css/y/yylioebcl.css';
import '../../css/a/aqcw25b9i.css';
import '../../css/y/yneii_-je.css';
import '../../css/d/dwlvr-b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qwug8ib1k"/><path class="yylioebcl"/><path class="aqcw25b9i"/><path class="yneii_-je"/><path class="dwlvr-b1b"/></g>`,
		"fallback": "streamline-ultimate-color:analytics-mountain",
	});
}

export default Component;
