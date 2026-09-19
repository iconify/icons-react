import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kf6c2ookb.css';
import '../../css/w/ww3qo5v7u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kf6c2ookb"/><path class="ww3qo5v7u"/></g>`,
		"fallback": "glyphs:basket-duo",
	});
}

export default Component;
