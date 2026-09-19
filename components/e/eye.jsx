import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aprbvlbti.css';
import '../../css/o/oclsbd5zw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aprbvlbti"/><circle class="oclsbd5zw"/></g>`,
		"fallback": "charm:eye",
	});
}

export default Component;
