import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/or1hscrph.css';
import '../../css/v/v9vypobbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="or1hscrph"/><path class="v9vypobbh"/></g>`,
		"fallback": "proicons:foldable-vertical-half",
	});
}

export default Component;
