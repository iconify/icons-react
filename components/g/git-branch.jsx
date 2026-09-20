import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f8hu70bxj.css';
import '../../css/u/u-0rdtb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f8hu70bxj"/><path class="u-0rdtb1a"/></g>`,
		"fallback": "mynaui:git-branch",
	});
}

export default Component;
