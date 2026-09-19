import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hau3ssbei.css';
import '../../css/b/b4wekebzy.css';
import '../../css/k/kja35acnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hau3ssbei"/><path class="b4wekebzy"/><path class="kja35acnc"/></g>`,
		"fallback": "iconoir:emoji-blink-right",
	});
}

export default Component;
