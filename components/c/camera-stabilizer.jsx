import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/te6kv_ncx.css';
import '../../css/s/sw7hm_gbx.css';
import '../../css/w/wpdze0b8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="te6kv_ncx"/><path class="sw7hm_gbx"/><path class="wpdze0b8n"/></g>`,
		"fallback": "streamline-freehand-color:camera-stabilizer",
	});
}

export default Component;
