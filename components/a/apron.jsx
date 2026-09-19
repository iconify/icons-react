import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kuisey8iv.css';
import '../../css/v/vkprnmhcj.css';
import '../../css/m/mi0sarbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kuisey8iv"/><path class="vkprnmhcj"/><path class="mi0sarbdd"/></g>`,
		"fallback": "hugeicons:apron",
	});
}

export default Component;
