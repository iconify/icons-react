import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/ehveol0vc.css';
import '../../css/m/m8-1o1onw.css';
import '../../css/f/ff2-4nb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ehveol0vc"/><path class="m8-1o1onw"/><path class="ff2-4nb1f wm-deco"/></g>`,
		"fallback": "withicons-kawaii:bamboo",
	});
}

export default Component;
