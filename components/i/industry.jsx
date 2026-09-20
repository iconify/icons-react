import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tc44gabuo.css';
import '../../css/t/thlr6jb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tc44gabuo"/><path class="thlr6jb7o"/></g>`,
		"fallback": "reicon:industry",
	});
}

export default Component;
