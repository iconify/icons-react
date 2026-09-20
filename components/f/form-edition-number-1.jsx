import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pzyw6jb6k.css';
import '../../css/r/r3l13k0qa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pzyw6jb6k"/><path class="r3l13k0qa"/></g>`,
		"fallback": "streamline-freehand:form-edition-number-1",
	});
}

export default Component;
