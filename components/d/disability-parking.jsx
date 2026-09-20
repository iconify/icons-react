import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hb9vm4bqe.css';
import '../../css/j/jl-yugtwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hb9vm4bqe"/><path class="jl-yugtwm"/></g>`,
		"fallback": "streamline-ultimate:disability-parking",
	});
}

export default Component;
