import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8x69abti.css';
import '../../css/f/fatrmacev.css';
import '../../css/u/u-ko-2vho.css';
import '../../css/a/axi6m4bwm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v8x69abti"/><path class="fatrmacev"/><path class="u-ko-2vho"/><path class="axi6m4bwm"/></g>`,
		"fallback": "streamline-color:camera-video",
	});
}

export default Component;
