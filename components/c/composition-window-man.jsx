import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ap271rfbz.css';
import '../../css/k/k9xj5kdlo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ap271rfbz"/><path class="k9xj5kdlo"/></g>`,
		"fallback": "streamline-ultimate:composition-window-man",
	});
}

export default Component;
