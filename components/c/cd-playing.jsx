import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mho6qfb0d.css';
import '../../css/a/aw_5gdmdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mho6qfb0d"/><path class="aw_5gdmdj"/></g>`,
		"fallback": "streamline-ultimate:cd-playing",
	});
}

export default Component;
