import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/c/cv7of7u4f.css';
import '../../css/g/glug8n--n.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="cv7of7u4f"/><path class="glug8n--n"/></g>`,
		"fallback": "system-uicons:floppy",
	});
}

export default Component;
