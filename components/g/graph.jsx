import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m-37c3brq.css';
import '../../css/f/f849ne16n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m-37c3brq"/><path class="f849ne16n"/></g>`,
		"fallback": "proicons:graph",
	});
}

export default Component;
