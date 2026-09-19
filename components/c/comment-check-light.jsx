import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ot1gaab8g.css';
import '../../css/k/k4wjgvq4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ot1gaab8g"/><path class="k4wjgvq4n"/></g>`,
		"fallback": "iconamoon:comment-check-light",
	});
}

export default Component;
