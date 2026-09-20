import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lqs17vbsb.css';
import '../../css/j/j3f-cqwca.css';
import '../../css/w/wjltsrbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lqs17vbsb"/><path class="j3f-cqwca"/><path class="wjltsrbuw"/></g>`,
		"fallback": "mynaui:funny-square",
	});
}

export default Component;
