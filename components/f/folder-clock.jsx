import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q2urjdbqv.css';
import '../../css/s/s5bwrobcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="q2urjdbqv"/><path class="s5bwrobcj"/></g>`,
		"fallback": "hugeicons:folder-clock",
	});
}

export default Component;
