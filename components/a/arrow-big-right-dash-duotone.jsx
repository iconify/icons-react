import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8yumab0d.css';
import '../../css/k/k9cfksblu.css';
import '../../css/i/ig4fi3b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8yumab0d"/><path class="k9cfksblu"/><path class="ig4fi3b7w"/></g>`,
		"fallback": "lucide-extended:arrow-big-right-dash-duotone",
	});
}

export default Component;
