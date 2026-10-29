import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/duw5n5d3b.css';
import '../../css/s/sa4nfc6yg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="duw5n5d3b"/><path class="sa4nfc6yg wm-a"/></g>`,
		"fallback": "withicons:bird-solid",
	});
}

export default Component;
