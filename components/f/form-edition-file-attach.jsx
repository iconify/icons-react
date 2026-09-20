import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k90_36mil.css';
import '../../css/l/l41vucckm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k90_36mil"/><path class="l41vucckm"/></g>`,
		"fallback": "streamline-freehand:form-edition-file-attach",
	});
}

export default Component;
