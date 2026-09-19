import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/alf80kb3g.css';
import '../../css/y/yfy59ccmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="alf80kb3g"/><path class="yfy59ccmy"/></g>`,
		"fallback": "iconoir:forward-15-seconds",
	});
}

export default Component;
