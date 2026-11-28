import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bouczrbwq.css';
import '../../css/q/qgoj2cb0j.css';
import '../../css/h/hd8ymvble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bouczrbwq"/><path class="qgoj2cb0j"/><path class="hd8ymvble"/></g>`,
		"fallback": "iconaut:ai-video",
	});
}

export default Component;
