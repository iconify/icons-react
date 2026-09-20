import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbgvcxwad.css';
import '../../css/y/yv6ztqbwg.css';
import '../../css/s/s33upcjls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="dbgvcxwad"/><path class="yv6ztqbwg"/><path class="s33upcjls"/></g>`,
		"fallback": "proicons:basketball",
	});
}

export default Component;
