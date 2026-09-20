import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbgvcxwad.css';
import '../../css/f/f0jx1ybtg.css';
import '../../css/z/z5r438b7j.css';
import '../../css/y/yl35v5b2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="dbgvcxwad"/><path class="f0jx1ybtg"/><rect class="z5r438b7j"/><path class="yl35v5b2e"/></g>`,
		"fallback": "proicons:emoji-crying-loudly",
	});
}

export default Component;
