import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qkpf7-2jn.css';
import '../../css/v/vdm0kwtim.css';
import '../../css/k/k835aeb6v.css';
import '../../css/g/gmh0yi24p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qkpf7-2jn wm-shadow"/><path class="vdm0kwtim wm-shadow"/><path class="k835aeb6v"/><path class="gmh0yi24p"/></g>`,
		"fallback": "withicons-brutal:film",
	});
}

export default Component;
