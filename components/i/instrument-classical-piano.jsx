import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k-x24yb0b.css';
import '../../css/q/quhpe2b8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k-x24yb0b"/><path class="quhpe2b8e"/></g>`,
		"fallback": "streamline-ultimate:instrument-classical-piano",
	});
}

export default Component;
