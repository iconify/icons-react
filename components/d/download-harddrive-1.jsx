import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jfmblfbbs.css';
import '../../css/x/xz9wp4baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jfmblfbbs"/><path class="xz9wp4baq"/></g>`,
		"fallback": "streamline-freehand:download-harddrive-1",
	});
}

export default Component;
