import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq_n0i1md.css';
import '../../css/h/hjm-ymvbz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq_n0i1md"/><path class="hjm-ymvbz"/>`,
		"fallback": "energy-icons:control-rod-20",
	});
}

export default Component;
