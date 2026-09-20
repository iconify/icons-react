import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/imgqpgy8k.css';
import '../../css/z/zo_6x2nho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="imgqpgy8k"/><path class="zo_6x2nho"/></g>`,
		"fallback": "streamline-sharp:file-bookmark",
	});
}

export default Component;
