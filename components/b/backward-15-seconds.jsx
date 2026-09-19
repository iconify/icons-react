import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fft7p4bow.css';
import '../../css/m/mzef3f7xa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fft7p4bow"/><path class="mzef3f7xa"/></g>`,
		"fallback": "iconoir:backward-15-seconds",
	});
}

export default Component;
