import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i5oofwb9h.css';
import '../../css/i/i5tsyvxih.css';
import '../../css/h/hdc8gxnie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i5oofwb9h"/><path class="i5tsyvxih"/><path class="hdc8gxnie"/></g>`,
		"fallback": "reicon:backward-10-seconds",
	});
}

export default Component;
