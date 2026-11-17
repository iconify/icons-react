import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yc59ygp-w.css';
import '../../css/w/wg9uxdsqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="yc59ygp-w"/><path class="wg9uxdsqj"/></g>`,
		"fallback": "matita:corner-up-left",
	});
}

export default Component;
