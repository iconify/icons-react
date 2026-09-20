import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a5-jzac4o.css';
import '../../css/h/hppj8jbqh.css';
import '../../css/y/yknmznb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a5-jzac4o"/><path class="hppj8jbqh"/><path class="yknmznb5w"/></g>`,
		"fallback": "reicon:files",
	});
}

export default Component;
