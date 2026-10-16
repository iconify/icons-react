import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k__-9jb3z.css';
import '../../css/e/eflquttdn.css';
import '../../css/x/x2yw4q15w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k__-9jb3z"/><path class="eflquttdn"/><path class="x2yw4q15w"/>`,
		"fallback": "energy-icons:cherry-picker-20-bold",
	});
}

export default Component;
