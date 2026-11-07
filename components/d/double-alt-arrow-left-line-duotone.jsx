import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c2rxlk3sw.css';
import '../../css/j/jlkx21byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c2rxlk3sw"/><path class="jlkx21byw"/></g>`,
		"fallback": "solar:double-alt-arrow-left-line-duotone",
	});
}

export default Component;
