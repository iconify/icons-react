import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jvkw6ljnc.css';
import '../../css/y/ybrtg879e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jvkw6ljnc"/><path class="ybrtg879e"/></g>`,
		"fallback": "hugeicons:artificial-intelligence-02",
	});
}

export default Component;
