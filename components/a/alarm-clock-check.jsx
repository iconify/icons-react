import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oh-xsqbcg.css';
import '../../css/q/q_oue32hu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oh-xsqbcg"/><path class="q_oue32hu"/></g>`,
		"fallback": "hugeicons:alarm-clock-check",
	});
}

export default Component;
