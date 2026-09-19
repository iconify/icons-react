import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jt23tkppp.css';
import '../../css/v/vjuq9pdef.css';
import '../../css/u/ue-__l4fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jt23tkppp"/><path class="vjuq9pdef"/><path class="ue-__l4fk"/></g>`,
		"fallback": "covid:graph-cured-increasing",
	});
}

export default Component;
