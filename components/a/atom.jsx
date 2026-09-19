import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a8yocrbjl.css';
import '../../css/q/qbxa08-op.css';
import '../../css/d/dwzk6j57p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><ellipse transform="rotate(45)" class="a8yocrbjl"/><ellipse transform="rotate(315)" class="qbxa08-op"/><path class="dwzk6j57p"/></g>`,
		"fallback": "charm:atom",
	});
}

export default Component;
