import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/apst68bcm.css';
import '../../css/v/v5dr9sbpb.css';
import '../../css/l/l0am3zboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="apst68bcm"/><path class="v5dr9sbpb"/><path class="l0am3zboh"/></g>`,
		"fallback": "evicons:charging-operator",
	});
}

export default Component;
