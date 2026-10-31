import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/blcdb5b4m.css';
import '../../css/o/o8umcibez.css';
import '../../css/j/jsuq6yb5a.css';
import '../../css/a/av607wbae.css';
import '../../css/v/vaqmqtb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="blcdb5b4m wm-shadow"/><path class="o8umcibez wm-shadow"/><path class="jsuq6yb5a"/><path class="av607wbae"/><path class="vaqmqtb8b wm-s"/></g>`,
		"fallback": "withicons-brutal:alarm-clock-check",
	});
}

export default Component;
