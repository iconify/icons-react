import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zqdah3c3z.css';
import '../../css/s/s0o9h4r5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zqdah3c3z"/><path class="s0o9h4r5r"/></g>`,
		"fallback": "iconoir:input-output",
	});
}

export default Component;
