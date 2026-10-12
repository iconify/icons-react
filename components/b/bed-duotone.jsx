import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zhcedhb7f.css';
import '../../css/k/knbgc0bhr.css';
import '../../css/k/ksm8fhndt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zhcedhb7f"/><path class="knbgc0bhr"/><path class="ksm8fhndt"/></g>`,
		"fallback": "lucide-extended:bed-duotone",
	});
}

export default Component;
