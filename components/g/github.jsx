import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tfu-_rb2q.css';
import '../../css/o/oelqgjbgx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tfu-_rb2q"/><path class="oelqgjbgx"/></g>`,
		"fallback": "charm:github",
	});
}

export default Component;
