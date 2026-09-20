import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k022anb7p.css';
import '../../css/t/t8er8nbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k022anb7p"/><path class="t8er8nbdn"/></g>`,
		"fallback": "streamline-ultimate:doctor-home-visit-1",
	});
}

export default Component;
