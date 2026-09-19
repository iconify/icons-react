import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w9udkpbpg.css';
import '../../css/b/bp8sdacqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w9udkpbpg"/><path class="bp8sdacqn"/></g>`,
		"fallback": "hugeicons:chair-barber",
	});
}

export default Component;
