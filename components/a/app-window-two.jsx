import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a46scwpvx.css';
import '../../css/s/s1-vlp53p.css';
import '../../css/r/r5l4zab0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a46scwpvx"/><path class="s1-vlp53p"/><path class="r5l4zab0y"/></g>`,
		"fallback": "streamline-freehand:app-window-two",
	});
}

export default Component;
