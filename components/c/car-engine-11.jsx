import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cp8pjzr7v.css';
import '../../css/a/a3shu4wez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cp8pjzr7v"/><path class="a3shu4wez"/></g>`,
		"fallback": "streamline-ultimate:car-engine-11",
	});
}

export default Component;
