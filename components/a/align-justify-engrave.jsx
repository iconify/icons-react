import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ik19wxu2o.css';
import '../../css/q/q9hb2zs7n.css';
import '../../css/r/ryuyffwfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ik19wxu2o"/><path class="q9hb2zs7n wm-shadow"/><path class="ryuyffwfo"/></g>`,
		"fallback": "withicons:align-justify-engrave",
	});
}

export default Component;
