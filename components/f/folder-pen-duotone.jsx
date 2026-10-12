import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kqpg5iqap.css';
import '../../css/g/g5oxg6tvq.css';
import '../../css/w/wh274hb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kqpg5iqap"/><path class="g5oxg6tvq"/><path class="wh274hb0w"/></g>`,
		"fallback": "lucide-extended:folder-pen-duotone",
	});
}

export default Component;
