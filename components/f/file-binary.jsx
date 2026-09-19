import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bt70wioqx.css';
import '../../css/j/jsed3t7yw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><polyline points="2.75 7.75 2.75 1.75 8.25 1.75 13.25 6.75 13.25 14.25"/><rect class="bt70wioqx"/><path class="jsed3t7yw"/><polyline points="7.75 2.25 7.75 7.25 12.8 7.25"/></g>`,
		"fallback": "charm:file-binary",
	});
}

export default Component;
