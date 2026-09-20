import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qonxbbjwm.css';
import '../../css/t/t3vymhb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qonxbbjwm"/><path class="t3vymhb9x"/></g>`,
		"fallback": "streamline-ultimate:app-window-bookmark",
	});
}

export default Component;
