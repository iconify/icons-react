import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wmbc14diz.css';
import '../../css/e/escw9vdfc.css';
import '../../css/h/hrfy6hbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wmbc14diz"/><path class="escw9vdfc"/><path class="hrfy6hbni"/></g>`,
		"fallback": "iconoir:coins",
	});
}

export default Component;
