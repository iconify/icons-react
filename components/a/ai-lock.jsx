import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/by47hzbvo.css';
import '../../css/i/ih-rr2b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="by47hzbvo"/><path class="ih-rr2b-q"/></g>`,
		"fallback": "hugeicons:ai-lock",
	});
}

export default Component;
