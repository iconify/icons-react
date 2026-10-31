import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zmlocfb9l.css';
import '../../css/d/dttl-cpxq.css';
import '../../css/z/zumocebti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow zmlocfb9l"/><path class="dttl-cpxq wm-shadow"/><path class="zumocebti"/></g>`,
		"fallback": "withicons-brutal:arrow-up-from-line",
	});
}

export default Component;
