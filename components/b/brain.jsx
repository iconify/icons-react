import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lebij_1zj.css';
import '../../css/n/ng8rr50vm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lebij_1zj"/><path class="ng8rr50vm"/></g>`,
		"fallback": "fluent-emoji-flat:brain",
	});
}

export default Component;
