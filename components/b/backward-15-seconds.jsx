import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y4ga3jbeq.css';
import '../../css/i/i5tsyvxih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y4ga3jbeq"/><path class="i5tsyvxih"/></g>`,
		"fallback": "reicon:backward-15-seconds",
	});
}

export default Component;
