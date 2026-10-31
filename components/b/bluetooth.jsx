import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/ebxyfnbhs.css';
import '../../css/y/ya39odbrp.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ebxyfnbhs"/><path class="ya39odbrp"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:bluetooth",
	});
}

export default Component;
