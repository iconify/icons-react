import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0bqss54y.css';
import '../../css/k/khng8rbjh.css';
import '../../css/q/qjxwpdimh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k0bqss54y"/><path class="khng8rbjh"/><path class="qjxwpdimh"/></g>`,
		"fallback": "lucide-extended:dessert-duotone",
	});
}

export default Component;
