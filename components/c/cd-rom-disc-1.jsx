import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bzzkzmw3v.css';
import '../../css/r/rdmh4zvez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bzzkzmw3v"/><path class="rdmh4zvez"/></g>`,
		"fallback": "streamline-freehand-color:cd-rom-disc-1",
	});
}

export default Component;
