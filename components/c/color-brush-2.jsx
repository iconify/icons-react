import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g4a-0ig_i.css';
import '../../css/s/s4kcns16m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g4a-0ig_i"/><path class="s4kcns16m"/></g>`,
		"fallback": "streamline-freehand:color-brush-2",
	});
}

export default Component;
