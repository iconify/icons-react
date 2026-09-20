import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dqvhlrz8x.css';
import '../../css/n/n646pccoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dqvhlrz8x"/><path class="n646pccoh"/></g>`,
		"fallback": "streamline-ultimate:checklist",
	});
}

export default Component;
