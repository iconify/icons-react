import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zndmembks.css';
import '../../css/p/pe8o9vbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zndmembks"/><path class="pe8o9vbqj"/></g>`,
		"fallback": "reicon:graduation-cap",
	});
}

export default Component;
