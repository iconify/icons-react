import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u0yspl54h.css';
import '../../css/k/k7tssgb7e.css';
import '../../css/s/sukbnfbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u0yspl54h"/><path class="k7tssgb7e"/><path class="sukbnfbqo"/></g>`,
		"fallback": "streamline-ultimate:car-repair-engine",
	});
}

export default Component;
