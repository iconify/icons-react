import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xye5qqb6j.css';
import '../../css/y/ybp_pqrii.css';
import '../../css/r/r6wnw272x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wm-k xye5qqb6j"/><path class="wm-a ybp_pqrii"/><path class="r6wnw272x wm-deco"/></g>`,
		"fallback": "withicons-kawaii:audio-lines",
	});
}

export default Component;
