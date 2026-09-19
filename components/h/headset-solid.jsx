import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gr6bpbbmd.css';
import '../../css/r/rfyy1zshr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gr6bpbbmd"/><path class="rfyy1zshr"/></g>`,
		"fallback": "iconoir:headset-solid",
	});
}

export default Component;
