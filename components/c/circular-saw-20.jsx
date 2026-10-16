import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs3s_acpz.css';
import '../../css/c/c36ktfb4d.css';
import '../../css/l/l5cqi8bbb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs3s_acpz"/><path class="c36ktfb4d"/><path class="l5cqi8bbb"/>`,
		"fallback": "energy-icons:circular-saw-20",
	});
}

export default Component;
