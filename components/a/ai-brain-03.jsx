import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cjuia-bgq.css';
import '../../css/w/wi-0c7-en.css';
import '../../css/b/b3zeicc3h.css';
import '../../css/p/px8h8ibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cjuia-bgq"/><path class="wi-0c7-en"/><path class="b3zeicc3h"/><path class="px8h8ibau"/></g>`,
		"fallback": "hugeicons:ai-brain-03",
	});
}

export default Component;
