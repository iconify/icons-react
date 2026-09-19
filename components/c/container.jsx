import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/av6wb0hph.css';
import '../../css/d/d9qhc9bdx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="av6wb0hph"/><path class="d9qhc9bdx"/></g>`,
		"fallback": "charm:container",
	});
}

export default Component;
