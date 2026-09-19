import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ik1jypbyt.css';
import '../../css/d/dclksmbzh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="ik1jypbyt"/><path class="dclksmbzh"/></g>`,
		"fallback": "charm:archive",
	});
}

export default Component;
