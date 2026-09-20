import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tecrspbmq.css';
import '../../css/h/hchui0bwr.css';
import '../../css/c/cvwopwltm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tecrspbmq"/><path class="hchui0bwr"/><path class="cvwopwltm"/></g>`,
		"fallback": "streamline-cyber-color:adjust-brightness",
	});
}

export default Component;
