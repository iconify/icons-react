import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gjzf-bbyk.css';
import '../../css/a/ark95k4vk.css';
import '../../css/r/rawy54brq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gjzf-bbyk"/><path class="ark95k4vk"/><path class="rawy54brq"/></g>`,
		"fallback": "solar:bedside-table-2-bold",
	});
}

export default Component;
