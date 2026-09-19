import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h4669-b9d.css';
import '../../css/q/q6_efx1zn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h4669-b9d"/><path class="q6_efx1zn"/></g>`,
		"fallback": "charm:crop",
	});
}

export default Component;
